import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {AuthSliceProps} from '../../types/types';
import {COLLECTIONS} from '../../constants/dbCollection';

// signUpSlice
export const signUpSlice = createAsyncThunk(
  'signUp/Authentication',
  async (
    {
      name,
      email,
      password,
    }: {
      name: string;
      email: string;
      password: string;
    },
    {rejectWithValue},
  ) => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );

      const user = userCredential?.user;
      if (!user || !user.uid) {
        return rejectWithValue('User sign-up failed: Invalid user object');
      }
      await user.updateProfile({
        displayName: name,
      });

      await firestore()?.collection(COLLECTIONS.USER)?.doc(user?.uid)?.set({
        name,
        userName: '',
        email,
        bio: '',
        officialImg: '',
        phone: '',
        gender: '',
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

      return {
        userName: name,
        userId: user.uid,
        email,
      };
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unknown error occurred during sign-up');
    }
  },
);

// loginUserSlice
export const loginUserSlice = createAsyncThunk(
  'login/Authentication',
  async (
    {email, password}: {email: string; password: string},
    {rejectWithValue},
  ) => {
    try {
      const userCredentials = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      const user = userCredentials?.user;
      if (!user || !user.uid) {
        return rejectWithValue('Login failed: Invalid user object');
      }
      return {
        userName: user.displayName ?? '',
        userId: user.uid ?? '',
        email: user.email ?? '',
      };
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An error occurred during log in');
    }
  },
);

// forgetPasswordSlice
export const forgetPasswordSlice = createAsyncThunk(
  'auth/reset-password',
  async ({email}: {email: string}, {rejectWithValue}) => {
    try {
      await auth().sendPasswordResetEmail(email);
      return {
        email,
      };
    } catch (error: unknown) {
      let errorMessage = 'An unexpected error occurred';
      if (error instanceof Error) {
        if (error.message.includes('auth/invalid-email')) {
          errorMessage = 'Invalid Email';
        } else if (error.message.includes('auth/user-not-found')) {
          errorMessage = 'User not found';
        } else {
          errorMessage = error.message;
        }
      }
      return rejectWithValue(errorMessage);
    }
  },
);

// google login
export const googleLoginSlice = createAsyncThunk(
  'auth/googleLogin',
  async (_, {rejectWithValue}) => {
    try {
      await GoogleSignin.hasPlayServices();
      const signInResult = await GoogleSignin.signIn();
      const idToken = signInResult?.data?.idToken;
      if (!idToken) {
        return rejectWithValue('Google Sign-In failed: No ID token found');
      }

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userCredential = await auth().signInWithCredential(
        googleCredential,
      );
      const user = userCredential?.user;

      if (user) {
        const userDocRef = firestore()
          .collection(COLLECTIONS.USER)
          .doc(user.uid);

        const docSnapshot = await userDocRef.get();

        if (!docSnapshot?.exists) {
          await userDocRef.set(
            {
              email: user.email ?? '',
              name: user.displayName ?? '',
              officialImg: user.photoURL ?? '',
              createdAt: firestore.FieldValue.serverTimestamp(),
              bio: '',
              gender: '',
              phone: '',
              userName: '',
            },
            {merge: true},
          );
        } else {
          const existingData = docSnapshot?.data() ?? {};

          await userDocRef.set(
            {
              email: user.email ?? '',
              name: user.displayName ?? '',
              officialImg: existingData?.officialImg ?? user.photoURL ?? '',
            },
            {merge: true},
          );
        }
      }

      return userCredential;
    } catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue('Google login failed');
    }
  },
);

const initialState: AuthSliceProps = {
  username: '',
  email: '',
  password: '',
  userId: '',
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Sign up cases
      .addCase(signUpSlice.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpSlice.fulfilled, (state, action) => {
        state.loading = false;
        state.username = action.payload?.userName ?? '';
        state.userId = action.payload?.userId ?? '';
        state.email = action.payload?.email ?? '';
      })
      .addCase(signUpSlice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Login cases
      .addCase(loginUserSlice.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUserSlice.fulfilled, (state, action) => {
        state.loading = false;
        state.userId = action.payload?.userId ?? '';
        state.username = action.payload?.userName ?? '';
        state.email = action.payload?.email ?? '';
      })
      .addCase(loginUserSlice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Forget password
      .addCase(forgetPasswordSlice.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgetPasswordSlice.fulfilled, (state, action) => {
        state.loading = false;
        state.email = action.payload?.email ?? '';
      })
      .addCase(forgetPasswordSlice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // google login
      .addCase(googleLoginSlice.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(googleLoginSlice.fulfilled, (state, action) => {
        state.loading = false;
        state.userId = action.payload?.user?.uid ?? '';
        state.username = action.payload?.user?.displayName ?? '';
        state.email = action.payload?.user?.email ?? '';
      })
      .addCase(googleLoginSlice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
