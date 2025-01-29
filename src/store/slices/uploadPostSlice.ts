
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const uploadPost = createAsyncThunk(
  'post/addPost',
  async (
    {imageUri, description}: {imageUri: string; description: string},
    {rejectWithValue},
  ) => {
    const userUID = auth().currentUser?.uid;
    const userName = auth().currentUser?.displayName;

    if (!userUID) {
      return rejectWithValue('User is not logged in');
    }

    try {
      await firestore().collection('posts').add({
        imageUrl: imageUri,
        description,
        userUID,
        userName,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
      return {success: true};
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to upload post');
    }
  },
);

const initialState = {
  imageUri: '',
  description: '',
  loading: false,
  error: null,
  success: false,
} as {
  imageUri: string;
  description: string;
  loading: boolean;
  error: string | null;
  success: boolean;
};

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
    },
  },
  extraReducers: builder => {
    builder
      .addCase(uploadPost.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadPost.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload?.success;
      })
      .addCase(uploadPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {setImageUri, setDescription, resetForm} = uploadPostSlice.actions;

export default uploadPostSlice.reducer;
