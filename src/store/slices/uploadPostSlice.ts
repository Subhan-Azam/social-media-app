// import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
// // import {launchImageLibrary} from 'react-native-image-picker';
// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';

// export const uploadPost = createAsyncThunk(
//   'post/addPost',
//   async (
//     {imageUri, description}: {imageUri: string; description: string},
//     {rejectWithValue},
//   ) => {
//     launchImageLibrary({mediaType: 'photo', quality: 1}, response => {
//       if (response.didCancel) {
//         console.log('User canceled image picker');
//       } else if (response.errorCode) {
//         console.log('ImagePicker Error: ', response.errorCode);
//       } else {
//         if (response.assets && response.assets[0].uri) {
//           setImageUri(response.assets[0].uri); // Save the image URI
//         } else {
//           console.log('No URI found');
//         }
//       }
//     });

//     const userUID = auth().currentUser?.uid;

//     if (!userUID) {
//       rejectWithValue('User is not logged in');
//       return;
//     }

//     try {
//       await firestore().collection('posts').add({
//         imageUrl: imageUri,
//         description,
//         userUID,
//         createdAt: firestore.FieldValue.serverTimestamp(),
//       });
//       return {success: true};
//     } catch (error: any) {
//       return rejectWithValue(error.message || 'Failed to upload post');
//     }
//   },
// );

// const initialState = {
//   imageUri: '',
//   description: '',
//   loading: false,
//   error: null,
//   success: false,
// } as {
//   imageUri: string;
//   description: string;
//   loading: boolean;
//   error: string | null;
//   success: boolean;
// };
// const uploadPostSlice = createSlice({
//   name: 'uploadPost',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       .addCase(uploadPost.pending, state => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(uploadPost.fulfilled, (state, action) => {
//         state.loading = false;
//         state.success = action.payload?.success;
//       });
//   },
// });

// export default uploadPostSlice.reducer;

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

// Async thunk for uploading the post
export const uploadPost = createAsyncThunk(
  'post/addPost',
  async (
    {imageUri, description}: {imageUri: string; description: string},
    {rejectWithValue},
  ) => {
    const userUID = auth().currentUser?.uid;

    if (!userUID) {
      return rejectWithValue('User is not logged in');
    }

    try {
      await firestore().collection('posts').add({
        imageUrl: imageUri,
        description,
        userUID,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
      return {success: true};
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to upload post');
    }
  },
);

// Initial state of the slice
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

// UploadPost slice with extraReducers to handle pending, fulfilled, and rejected actions
const uploadPostSlice = createSlice({
  name: 'uploadPost',
  initialState,
  reducers: {
    // Action to set image URI from the image picker
    setImageUri: (state, action) => {
      state.imageUri = action.payload;
    },
    // Action to set the description of the post
    setDescription: (state, action) => {
      state.description = action.payload;
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

// Export the actions
export const {setImageUri, setDescription} = uploadPostSlice.actions;

// Export the reducer
export default uploadPostSlice.reducer;
