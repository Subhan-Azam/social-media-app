import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {UserProfileState} from '../../types/types';
import {ShowToast} from '../../components/toastMessage/ToastMessage';

const initialState: UserProfileState = {
  officialImg: '',
  name: '',
  userName: '',
  email: '',
  bio: '',
  phone: '',
  gender: '',
  loading: false,
  error: null,
};

export const fetchUserProfile = createAsyncThunk(
  'editProfile/getDetails',
  async (_, {rejectWithValue}) => {
    try {
      const currentUser = auth().currentUser;
      if (!currentUser) {
        return;
      }

      const snapshot = await firestore()
        .collection('Users')
        .doc(currentUser?.uid)
        .get();

      if (snapshot.exists) {
        return snapshot.data();
      } else {
        throw new Error('User not found in Firestore');
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue('Failed to update profile');
    }
  },
);

export const updateUserProfile = createAsyncThunk(
  'editProfile/updateUserProfile',
  async (updatedData: Partial<UserProfileState>, {rejectWithValue}) => {
    try {
      const currentUser = auth().currentUser;
      if (!currentUser) {
        return;
      }

      await firestore()
        .collection('Users')
        .doc(currentUser.uid)
        .update(updatedData);

      ShowToast('success', 'Congratulations', 'Data updated successfully');

      return updatedData;
    } catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }
    }
  },
);

export const editProfileSlice = createSlice({
  name: 'editProfile',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // fetch user profile
      .addCase(fetchUserProfile.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        Object.assign(state, action.payload);
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // update user profile
      .addCase(updateUserProfile.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        Object.assign(state, action.payload);
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default editProfileSlice.reducer;
