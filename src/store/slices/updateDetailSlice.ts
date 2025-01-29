import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';

// Thunk to update profile in Firestore
export const updateProfile = createAsyncThunk(
  'profile/updateProfile',
  async (
    profileData: {name: string; username: string; email: string},
    thunkAPI,
  ) => {
    try {
      const userRef = firestore().collection('Users').doc('user_id');
      await userRef.update(profileData);
      return profileData;
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
    status: 'idle',
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
      // .addCase(updateProfile.pending, state => {
      //   state.status = 'loading';
      // })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.name = action.payload.name;
        state.username = action.payload.username;
        state.email = action.payload.email;
      });
    // .addCase(updateProfile.rejected, (state, action) => {
    //   state.status = 'failed';
    //   state.error = action.payload ;
    // });
  },
});

export const {setProfileData} = profileSlice.actions;

export default profileSlice.reducer;
