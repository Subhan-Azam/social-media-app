import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import profileSlice from './slices/authSlice';

export const store = configureStore({
  reducer: {
    authStore: authReducer,
    profileStore: profileSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
