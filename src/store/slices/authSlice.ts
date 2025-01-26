import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const signUpSlice = createAsyncThunk(
  'signUp/Authentication',
  async (
    {name, email, password}: {name: string; email: string; password: string},
    {rejectWithValue},
  ) => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );

      // console.log('user userCredential', userCredential.user);
      const user = userCredential.user;

      // Update user profile with the username
      await user.updateProfile({
        displayName: name,
      });

      // Save user data to Firestore
      await firestore().collection('Users').doc().set({
        id: user.uid,
        name,
        email,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

      // console.log('User Successfully signUp');

      return {
        userName: name,
        userId: user.uid,
        email,
      };
    } catch (error: any) {
      // console.log('An error occurred during sign up');
      return rejectWithValue(
        error.message || 'An error occurred during sign up',
      );
    }
  },
);

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
      // console.log('user userCredentials', userCredentials.user);
      const user = userCredentials.user;
      return {
        userName: user.displayName,
        userId: user.uid,
        email: user.email,
      };
    } catch (error: any) {
      // console.log('An error occurred during log in');
      return rejectWithValue(
        error.message || 'An error occurred during log in',
      );
    }
  },
);

// forgetPasswordSlice
export const forgetPasswordSlice = createAsyncThunk(
  'auth/reset-password',
  async ({email}: {email: string}, {rejectWithValue}) =>
    // {rejectWithValue},
    {
      try {
        await auth().sendPasswordResetEmail(email);
        return {
          email,
        };
      } catch (error: any) {
        let errorMessage = error.message;
        if (error.message === 'auth/invalid-email') {
          errorMessage('Invalid Email');
          console.log('Invalid Email');
        } else if (error.message === 'auth/user-not-found') {
          errorMessage('user-not-found');
          console.log('user-not-found');
        } else {
          errorMessage('Unexpected Error occur');
          console.log('Unexpected Error occur');
        }
        return rejectWithValue(errorMessage);
      }
    },
);

const initialState = {
  username: '',
  email: '',
  password: '',
  loading: false,
  userId: '',
  error: null,
} as {
  username: string;
  email: string;
  password: string;
  loading: boolean;
  userId: string;
  error: string | null;
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
        state.username = action.payload.userName;
        state.userId = action.payload.userId;
        state.email = action.payload.email;
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
        state.userId = action.payload.userId;
        state.username = action.payload.userName || ' ';
        state.email = action.payload.email || '';
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
        state.email = action.payload.email || '';
      })
      .addCase(forgetPasswordSlice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
