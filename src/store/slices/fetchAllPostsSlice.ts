import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import {PostSliceProps} from '../../types/types';
import {COLLECTIONS} from '../../constants/dbCollection';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const postRes = await firestore()
      ?.collection(COLLECTIONS?.POST)
      ?.orderBy('createdAt', 'desc')
      ?.get();

    const posts = await Promise.all(
      postRes?.docs?.map(async doc => {
        const postData = doc?.data();
        const userUID = postData?.userUID;

        const userDoc = await firestore()
          ?.collection(COLLECTIONS?.USER)
          ?.doc(userUID)
          ?.get({source: 'server'});

        const userData = userDoc?.exists ? userDoc?.data() : {};

        return {
          id: doc?.id,
          imageUrl: postData?.imageUrl ?? '',
          description: postData?.description ?? '',
          userUID: postData?.userUID ?? '',
          userName: postData?.userName ?? '',
          createdAt: postData?.createdAt?.toDate?.()?.toISOString() ?? '',
          officialImg: userData?.officialImg ?? '',
        };
      }),
    );

    return posts;
  } catch (error) {
    throw new Error('Failed to fetch posts with user data');
  }
});

const initialState = {
  posts: [],
  loading: true,
  error: null,
} as {
  posts: PostSliceProps[];
  loading: boolean;
  error: string | null;
};

const fetchAllPostSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<PostSliceProps[]>) => {
      state.posts = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload ?? [];
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message ?? 'Failed to fetch posts';
      });
  },
});

export const {setPosts} = fetchAllPostSlice.actions;
export default fetchAllPostSlice.reducer;
