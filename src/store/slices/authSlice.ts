import {signUp} from '../../../types/type';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const signUpUser = createAsyncThunk(
  'signUp/Authentication',
  async ({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      // Sign up the user with email and password
      console.log(email, password);
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      console.log(userCredential.user);

      const user = userCredential.user;

      // Update user profile with the username
      await user.updateProfile({
        displayName: name,
      });

      // Save user data to Firestore
      await firestore().collection('Users').doc(user.uid).set({
        id: user.uid, // Using user.uid here
        name,
        email,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

      return {
        userName: name,
        userId: user.uid,
        email,
      };
    } catch (error: any) {
      throw new Error(error.message || 'An error occurred during sign up');
    }
  },
);

export const loginUser = createAsyncThunk(
  'login/Authentication',
  async ({email, password}: {email: string; password: string}) => {
    try {
      console.log(email, password);
      const usercredentials = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      return {
        userName: usercredentials.user.displayName,
        userId: usercredentials.user.uid,
        email: usercredentials.user.email,
      };
    } catch (error: any) {
      throw new Error(error.message || 'An error occurred during log in');
    }
  },
);

const initialState = {
  username: '',
  password: '',
  email: '',
  loading: false,
  userId: '',
  profilePic: '',
} as signUp;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // For the sign up action
      .addCase(signUpUser.pending, state => {
        state.loading = true;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.username = action.payload.userName;
        state.userId = action.payload.userId;
      })
      // For the login action
      .addCase(loginUser.fulfilled, (state, action) => {
        state.userId = action.payload.userId;
        state.username = action.payload.userName || ' ';
      });
  },
});

export default authSlice.reducer;
