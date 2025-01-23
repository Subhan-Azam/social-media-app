import {configureStore} from '@reduxjs/toolkit';
import signUpSlice from './slices/signUpSlice';
import logInSlice from './slices/logInSlice';
import authSlice from './slices/authSlice';

export const store = configureStore({
  reducer: {
    signUpStore: signUpSlice,
    logInStore: logInSlice,
    authStore: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;




// import { configureStore } from '@reduxjs/toolkit';
// // import signUpSlice from './slices/signUpSlice';
// import logInSlice from './slices/logInSlice';
// import authSlice from './slices/authSlice'; // Import the updated authSlice

// export const store = configureStore({
//   reducer: {
//     // signUpStore: signUpSlice, // Keep signUpSlice if you're handling other state related to sign-up
//     logInStore: logInSlice,
//     authStore: authSlice,  // Updated to handle auth-related state (sign-up, login)
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
