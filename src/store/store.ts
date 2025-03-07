import {configureStore} from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import uploadPostSlice from './slices/uploadPostSlice';
import fetchAllPostSlice from './slices/fetchAllPostsSlice';
import editProfileSlice from './slices/editProfileSlice';

export const store = configureStore({
  reducer: {
    authReducer: authSlice,
    allPostReducer: fetchAllPostSlice,
    uploadPostReducer: uploadPostSlice,
    editPostReducer: editProfileSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
