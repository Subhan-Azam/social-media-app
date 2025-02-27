import {useState} from 'react';
import {signUpSlice} from '../store/slices/authSlice';
import { useAppDispatch } from './useRedux';

const useSignUp = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorInput, setErrorInput] = useState<string>('');

  const dispatch = useAppDispatch();

  const validateInputs = () => {
    if (!name || !email || !password || !confirmPassword) {
      return 'All fields are required.';
    }
    if (!name.trim()) {
      return 'Name is required.';
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return 'Invalid email address.';
    }
    if (password.length < 6) {
      return 'Password must be at least 6 characters.';
    }
    if (password !== confirmPassword) {
      return 'Passwords do not match.';
    }
    return null;
  };

  const createUser = async () => {
    const error = validateInputs();
    if (error) {
      setErrorInput(error);
      return;
    }

    setErrorInput('');
    setLoading(true);

    try {
      await dispatch(
        signUpSlice({
          name,
          email,
          password,
        }),
      ).unwrap();
    } catch (err: any) {
      setErrorInput(err.message || 'An error occurred during sign up.');
    } finally {
      setLoading(false);
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    loading,
    errorInput,
    createUser,
  };
};

export default useSignUp;
