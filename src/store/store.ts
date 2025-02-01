import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import profileSlice from './slices/authSlice';
import uploadPostSlice from './slices/uploadPostSlice';
import fetchAllPostSlice from './slices/fetchAllPostsSlice';
import editProfileSlice from './slices/editProfileSlice';

export const store = configureStore({
  reducer: {
    authStore: authReducer,
    profileStore: profileSlice,
    allPostStore: fetchAllPostSlice,
    uploadPostStore: uploadPostSlice,
    editPostStore: editProfileSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
