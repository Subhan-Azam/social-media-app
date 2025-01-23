import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface SignUpState {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  errorInput: string | null;
  loading: boolean;
}

const initialState: SignUpState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  errorInput: null,
  loading: false,
};

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action: PayloadAction<string>) => {
      state.confirmPassword = action.payload;
    },
    setErrorInput: (state, action: PayloadAction<string | null>) => {
      state.errorInput = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    resetForm: state => {
      state.name = '';
      state.email = '';
      state.password = '';
      state.confirmPassword = '';
      state.errorInput = null;
      state.loading = false;
    },
  },
});

export const {
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
  setErrorInput,
  setLoading,
  resetForm,
} = signUpSlice.actions;

export default signUpSlice.reducer;
