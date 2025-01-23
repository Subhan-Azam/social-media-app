// // import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// // interface LoginState {
// //   user: any;
// //   loading: boolean;
// //   error: string | null;
// // }

// // const initialState: LoginState = {
// //   user: null,
// //   loading: false,
// //   error: null,
// // };

// // const logInSlice = createSlice({
// //   name: 'login',
// //   initialState,
// //   reducers: {
// //     setUser: (state, action: PayloadAction<any>) => {
// //       state.user = action.payload;
// //     },
// //     setLoading: (state, action: PayloadAction<boolean>) => {
// //       state.user = action.payload;
// //     },
// //     setError: (state, action: PayloadAction<null>) => {
// //       state.user = action.payload;
// //     },
// //   },
// // });

// // export const {setUser, setLoading, setError} = logInSlice.actions;
// // export default loginSlice.reducer;

// // loginSlice.ts

// // import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// // interface LoginState {
// //   user: any; // Store user data (e.g., { uid, email, displayName })
// //   loading: boolean;
// //   error: string | null;
// // }

// // const initialState: LoginState = {
// //   user: null,
// //   loading: false,
// //   error: null,
// // };

// // const logInSlice = createSlice({
// //   name: 'logoIn',
// //   initialState,
// //   reducers: {
// //     setUser: (state, action: PayloadAction<any>) => {
// //       state.user = action.payload;
// //     },
// //     setLoading: (state, action: PayloadAction<boolean>) => {
// //       state.loading = action.payload;
// //     },
// //     setError: (state, action: PayloadAction<string | null>) => {
// //       state.error = action.payload;
// //     },
// //     logout: state => {
// //       state.user = null;
// //       state.loading = false;
// //       state.error = null;
// //     },
// //   },
// // });

// // export const {setUser, setLoading, setError, logout} = logInSlice.actions;
// // export default logInSlice.reducer;




// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface LoginState {
//   user: any; // Store user data (e.g., { uid, email, displayName })
//   loading: boolean;
//   error: string | null;
// }

// const initialState: LoginState = {
//   user: null,
//   loading: false,
//   error: null,
// };

// const logInSlice = createSlice({
//   name: 'login', // Changed 'logoIn' to 'login'
//   initialState,
//   reducers: {
//     setUser: (state, action: PayloadAction<any>) => {
//       state.user = action.payload;
//     },
//     setLoading: (state, action: PayloadAction<boolean>) => {
//       state.loading = action.payload; // Fixed: Update loading, not user
//     },
//     setError: (state, action: PayloadAction<string | null>) => {
//       state.error = action.payload; // Fixed: Update error, not user
//     },
//     logout: state => {
//       state.user = null;
//       state.loading = false;
//       state.error = null;
//     },
//   },
// });

// export const { setUser, setLoading, setError, logout } = logInSlice.actions;
// export default logInSlice.reducer;




import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LogInState {
  email: string;
  password: string;
  errorInput: string | null;
  loading: boolean;
}

const initialState: LogInState = {
  email: '',
  password: '',
  errorInput: null,
  loading: false,
};

const logInSlice = createSlice({
  name: 'logIn',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setErrorInput: (state, action: PayloadAction<string | null>) => {
      state.errorInput = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    resetForm: state => {
      state.email = '';
      state.password = '';
      state.errorInput = null;
      state.loading = false;
    },
  },
});

export const {
  setEmail,
  setPassword,
  setErrorInput,
  setLoading,
  resetForm,
} = logInSlice.actions;

export default logInSlice.reducer;
