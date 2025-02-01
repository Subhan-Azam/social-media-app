import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';
// import Toast from 'react-native-toast-message';

interface UserProfileState {
  officialImg: string;
  name: string;
  userName: string;
  email: string;
  bio: string;
  phone: string;
  gender: string;
  loading: boolean;
  // userData: [];
  error: string | null;
}

const initialState: UserProfileState = {
  officialImg: '',
  name: '',
  userName: '',
  email: '',
  bio: '',
  phone: '',
  gender: '',
  loading: false,
  // userData: [],
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

      console.log('currentUser ID================', currentUser.uid);
      console.log('currentUser================', currentUser);

      const snapshot = await firestore()
        .collection('Users')
        .doc(currentUser?.uid)
        .get();

      console.log('snapshot============', snapshot);
      if (snapshot.exists) {
        const snapshotData = snapshot.data();
        console.log('snapshotData:', snapshotData);
        return snapshotData;
      } else {
        console.warn('User not found in Firestore');

        throw new Error('User not found in Firestore');
      }
    } catch (err: any) {
      rejectWithValue(err.message);
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

      // Toast.show({
      //   type: 'success',
      //   text1: 'Congratulations',
      //   text2: 'Data updated successfully',
      // });
      Alert.alert('Updated successfully');

      console.log('updateData==============', updatedData);
      return updatedData;
    } catch (err: any) {
      rejectWithValue(err.message);
    }
  },
);

export const editProfileSlice = createSlice({
  name: 'editProfile',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder
      .addCase(updateUserProfile.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        // state.userData = action.payload;
        Object.assign(state, action.payload);
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
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
      });
  },
});

export default editProfileSlice.reducer;
