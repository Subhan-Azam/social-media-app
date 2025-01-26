import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import profileSlice from './slices/authSlice';
import uploadPostSlice from './slices/uploadPostSlice';

export const store = configureStore({
  reducer: {
    authStore: authReducer,
    profileStore: profileSlice,
    uploadPostStore: uploadPostSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
