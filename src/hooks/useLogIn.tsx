import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import type {AppDispatch, RootState} from '../store/store'; // Adjust path as needed
import {loginUser} from '../store/slices/authSlice';

const useLogIn = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {loading, error} = useSelector((state: RootState) => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorInput, setErrorInput] = useState('');

  const logInUser = async () => {
    setErrorInput('');
    if (!email || !password) {
      setErrorInput('Both fields are required');
      return;
    }

    try {
      await dispatch(
        loginUser({
          email,
          password,
        }),
      ).unwrap();
      console.log('Login successful!');
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
