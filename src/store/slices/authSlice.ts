import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';

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

      const user = userCredential.user;

      await user.updateProfile({
        displayName: name,
      });

      await firestore().collection('Users').doc(user.uid).set({
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
    } catch (error: any) {
      return rejectWithValue(
        error.message || 'An error occurred during sign up',
      );
    }
  },
);




// loginUserSlice
// export const loginUserSlice = createAsyncThunk(
//   'login/Authentication',
//   async (
//     {email, password}: {email: string; password: string},
//     {rejectWithValue},
//   ) => {
//     try {
//       const userCredentials = await auth().signInWithEmailAndPassword(
//         email,
//         password,
//       );
//       const user = userCredentials.user;
//       return {
//         userName: user.displayName,
//         userId: user.uid,
//         email: user.email,
//       };
//     } catch (error: any) {
//       return rejectWithValue(
//         error.message || 'An error occurred during log in',
//       );
//     }
//   },
// );

// by chatGpt Login
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
      const user = userCredentials.user;

      // Fetch user data from Firestore
      const snapshot = await firestore()
        .collection('Users')
        .doc(user.uid)
        .get();
      const userData = snapshot.data();

      return {
        name: userData?.name || '',
        userId: user.uid,
        email: user.email,
        bio: userData?.bio || '',
        userName: userData?.userName || '',
        officialImg: userData?.officialImg || '',
      };
    } catch (error: any) {
      return rejectWithValue(
        error.message || 'An error occurred during log in',
      );
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
      console.log('error in sending email link=====', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);

// // Google Login
// export const signInWithGoogle = createAsyncThunk('withGoogle', async () => {
//   try {
//     await GoogleSignin.hasPlayServices();
//     const userInfo = await GoogleSignin.signIn();
//     const googleCredential = auth.GoogleAuthProvider.credential(
//       userInfo.data?.idToken as string,
//     );
//     const userCredential = await auth().signInWithCredential(googleCredential);
//     const fullUser = userCredential.user;

//     await firestore().collection('users').doc(fullUser.uid).set({
//       fullName: fullUser.displayName,
//       email: fullUser.email,
//       phone: fullUser.phoneNumber,
//     });
//     Alert.alert('Google Sign-In successful!');
//     return userCredential || null;
//   } catch (error) {
//     const errorMessage =
//       error instanceof Error ? error.message : 'Unknown error occurred';
//     console.log('Google Sign-In Error', errorMessage);
//   }
// });
// export const googleLoginSlice = createAsyncThunk(
//   'auth/googleLogin',
//   async (_, {rejectWithValue}) => {
//     try {
//       // Ensure Google Play services are available
//       await GoogleSignin.hasPlayServices();

//       // Get the user's ID token
//       const signInResult = await GoogleSignin.signIn();

//       const idToken = signInResult?.data?.idToken;

//       if (!idToken) {
//         throw new Error('No ID token found');
//       }

//       const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//       const userCredential = await auth().signInWithCredential(
//         googleCredential,
//       );
//       return userCredential.user;
//     } catch (err: any) {
//       console.log('Error in Google login:', err);
//       return rejectWithValue(err?.message || 'Google login failed');
//     }
//   },
// );

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
