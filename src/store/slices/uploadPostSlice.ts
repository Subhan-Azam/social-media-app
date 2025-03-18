import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {UploadPostSlice} from '../../types/types';
import {COLLECTIONS} from '../../constants/dbCollection';

const initialState: UploadPostSlice = {
  imageUri: '',
  description: '',
  loading: false,
  error: null,
  success: false,
};

export const uploadPost = createAsyncThunk(
  'post/addPost',
  async (
    {imageUri, description}: {imageUri: string; description: string},
    {rejectWithValue},
  ) => {
    const userUID = auth().currentUser?.uid;
    const userName = auth().currentUser?.displayName ?? 'Unknown User';

    if (!userUID) {
      return rejectWithValue('User is not logged in');
    }

    try {
      await firestore().collection(COLLECTIONS.POST).add({
        imageUrl: imageUri,
        description,
        userUID,
        userName,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
      return {success: true};
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error?.message);
      }
      return rejectWithValue('Failed to upload post');
    }
  },
);

const uploadPostSlice = createSlice({
  name: 'uploadPost',
  initialState,
  reducers: {
    setImageUri: (state, action) => {
      state.imageUri = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    resetForm: state => {
      state.imageUri = '';
      state.description = '';
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(uploadPost.pending, state => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(uploadPost.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload?.success ?? false;
      })
      .addCase(uploadPost.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) ?? 'Upload failed';
      });
  },
});

export const {setImageUri, setDescription, resetForm} = uploadPostSlice.actions;

export default uploadPostSlice.reducer;
