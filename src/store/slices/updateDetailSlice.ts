// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const updateuserDetails = createAsyncThunk(

// )

// store/profileSlice.ts
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore'; // Assuming firebase is initialized properly

// Thunk to update profile in Firestore
export const updateProfile = createAsyncThunk(
  'profile/updateProfile',
  async (
    profileData: {name: string; username: string; email: string},
    thunkAPI,
  ) => {
    try {
      const userRef = firestore().collection('Users').doc('user_id'); // Use dynamic user ID
      await userRef.update(profileData);
      return profileData; // Return updated data
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    name: '',
    username: '',
    email: '',
    status: 'idle', // idle, loading, succeeded, failed
    error: null,
  },
  reducers: {
    setProfileData(state, action) {
      state.name = action.payload.name;
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
  },
  extraReducers: builder => {
    builder
    //   .addCase(updateProfile.pending, state => {
    //     state.status = 'loading';
    //   })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.name = action.payload.name;
        state.username = action.payload.username;
        state.email = action.payload.email;
      })
    //   .addCase(updateProfile.rejected, (state, action) => {
    //     state.status = 'failed';
    //     state.error = action.payload;
    //   });
  },
});

export const {setProfileData} = profileSlice.actions;

export default profileSlice.reducer;
