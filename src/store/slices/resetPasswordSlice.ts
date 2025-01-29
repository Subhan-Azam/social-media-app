import {createAsyncThunk, createSlice, isRejectedWithValue} from '@reduxjs/toolkit';

const initialState = {
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
  loading: false,
  error: null,
} as {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
  loading: boolean;
  error: string | null;
};

const resetPassword = createAsyncThunk('resetPassword/changePassword',
    async(
        {oldPassword,newPassword,confirmPassword}:{oldPassword:string,newPassword:string,confirmPassword:string}
    )=>(
        try {
            
        } catch (error) {
            
        }
    )
);

const resetPasswordSlice = createSlice({
  name: 'resetPassword',
  initialState,
  reducers: {},
});

export default resetPasswordSlice.reducer;
