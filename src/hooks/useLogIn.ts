import {useState} from 'react';
import {loginUserSlice} from '../store/slices/authSlice';
import {useAppDispatch, useAppSelector} from './useRedux';

const useLogIn = () => {
  const dispatch = useAppDispatch();

  const {loading, error} = useAppSelector(state => state.authReducer);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorInput, setErrorInput] = useState<string>('');

  const logInUser = async () => {
    setErrorInput('');
    if (!email?.trim() || !password?.trim()) {
      setErrorInput('Both fields are required');
      return;
    }

    try {
      if (dispatch) {
        await dispatch(
          loginUserSlice({
            email: email ?? '',
            password: password ?? '',
          }),
        ).unwrap();
      } else {
        throw new Error('Dispatch is not available');
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorInput(err.message ?? 'An unknown error occurred');
      } else {
        setErrorInput('Failed to log in. Please try again.');
      }
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    loading: loading ?? false,
    error: (errorInput || error) ?? '',
    logInUser,
  };
};

export default useLogIn;
