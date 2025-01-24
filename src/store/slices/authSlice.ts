import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const signUpUser = createAsyncThunk(
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

      console.log('user userCredential', userCredential.user);
      const user = userCredential.user;

      // Update user profile with the username
      await user.updateProfile({
        displayName: name,
      });

      // Save user data to Firestore
      await firestore().collection('Users').doc(user.uid).set({
        id: user.uid,
        name,
        email,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

      console.log('User Successfully signUp');

      return {
        userName: name,
        userId: user.uid,
        email,
      };
    } catch (error: any) {
      console.log('An error occurred during sign up');
      return rejectWithValue(
        error.message || 'An error occurred during sign up',
      );
    }
  },
);

export const loginUser = createAsyncThunk(
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
      console.log('user userCredentials', userCredentials.user);
      const user = userCredentials.user;
      return {
        userName: user.displayName,
        userId: user.uid,
        email: user.email,
      };
    } catch (error: any) {
      console.log('An error occurred during log in');
      return rejectWithValue(
        error.message || 'An error occurred during log in',
      );
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
      .addCase(signUpUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.username = action.payload.userName;
        state.userId = action.payload.userId;
        state.email = action.payload.email;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Login cases
      .addCase(loginUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userId = action.payload.userId;
        state.username = action.payload.userName || ' ';
        state.email = action.payload.email || '';
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;

// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
// import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

// // for signUp

// export const signUpUser = createAsyncThunk(
//   'signUp/authentication',
//   async (
//     {name, email, password}: {name: string; email: string; password: string},
//     {rejectWithValue},
//   ) => {
//     try {
//       const userCredential = await auth().createUserWithEmailAndPassword(
//         email,
//         password,
//       );

//       console.log('userCredential', userCredential.user);
//       const user = userCredential.user;

//       await user.updateProfile({displayName: name});

//       await firestore().collection('Users').doc(user.uid).set({
//         id: user.uid,
//         name,
//         email,
//         createdAt: firestore.Timestamp.now(),
//       });

//       return {
//         userName: name,
//         email: email,
//         userId: user.uid,
//       };
//     } catch (error: any) {
//       console.log('error', error);
//       return rejectWithValue(
//         error.message || 'An error occurred during log in',
//       );
//     }
//   },
// );

// // For Login

// export const loginUser = createAsyncThunk(
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
//       console.log('user userCredentials', userCredentials.user);
//       const user = userCredentials.user;
//       return {
//         userName: user.displayName,
//         userId: user.uid,
//         email: user.email,
//       };
//     } catch (error: any) {
//       console.log('An error occurred during log in');
//       return rejectWithValue(
//         error.message || 'An error occurred during log in',
//       );
//     }
//   },
// );

// const initialState = {
//   userName: '',
//   email: '',
//   password: '',
//   userId: '',
//   loading: false,
//   error: null,
// } as {
//   userName: string;
//   email: string;
//   password: string;
//   userId: string;
//   loading: boolean;
//   error: string | null;
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       .addCase(signUpUser.pending, state => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(signUpUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.userName = action.payload.userName;
//         state.email = action.payload.email;
//         state.userId = action.payload.userId;
//       })
//       .addCase(signUpUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       });
//     // Login cases
//       .addCase(loginUser.pending, state => {
//        state.loading = true;
//        state.error = null;
//      })
//      .addCase(loginUser.fulfilled, (state, action) => {
//        state.loading = false;
//        state.userId = action.payload.userId;
//        state.username = action.payload.userName || ' ';
//        state.email = action.payload.email || '';
//      })
//      .addCase(loginUser.rejected, (state, action) => {
//        state.loading = false;
//        state.error = action.payload as string;
//      });
//        },
//      });

// export default authSlice.reducer;
