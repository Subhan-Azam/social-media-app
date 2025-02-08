import {useState} from 'react';
import {loginUserSlice} from '../store/slices/authSlice';
import useAppDispatch from './useAppDispatch';
import useAppSelector from './useAppSelector';

const useLogIn = () => {
  const dispatch = useAppDispatch();

  const {loading, error} = useAppSelector(state => state.authStore);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorInput, setErrorInput] = useState<string>('');

  const logInUser = async () => {
    setErrorInput('');
    if (!email || !password) {
      setErrorInput('Both fields are required');
      return;
    }

    try {
      await dispatch(
        loginUserSlice({
          email,
          password,
        }),
      ).unwrap();
    } catch (err: any) {
      setErrorInput(err || 'Failed to log in. Please try again.');
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error: errorInput || error,
    logInUser,
  };
};

export default useLogIn;
