import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const res = await firestore()
    .collection('posts')
    .orderBy('createdAt', 'desc')
    .get();

  const data = res.docs.map(doc => {
    const postData = doc.data();

    return {
      id: doc.id,
      ...postData,
      createdAt: postData.createdAt.toDate().toISOString(),
    };
  }) as Post[];

  return data;
});

export const eachUserPosts = createAsyncThunk(
  'posts/eachUserPosts',
  async () => {
    const res = await firestore()
      .collection('posts')
      .orderBy('createdAt', 'desc')
      .get();

    const data = res.docs.map(doc => {
      const postData = doc.data();

      return {
        id: doc.id,
        ...postData,
        createdAt: postData.createdAt.toDate().toISOString(),
      };
    }) as Post[];

    return data;
  },
);

interface Post {
  id: string;
  imageUrl: string;
  description: string;
  userUID: string;
  userName: string;
  createdAt: string;
}

const initialState = {
  posts: [],
  loading: true,
  error: null,
} as {
  posts: Post[];
  loading: boolean;
  error: string | null;
};

const fetchAllPostSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // setRealTimePosts: (state, action) => {
    //   state.posts = action.payload;
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch posts';
      });
  },
});

// export const { setRealTimePosts } = fetchAllPostSlice.actions;
export default fetchAllPostSlice.reducer;
