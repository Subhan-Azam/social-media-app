import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {signUpSlice} from '../store/slices/authSlice';
import {AppDispatch} from '../store/store';

const useSignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorInput, setErrorInput] = useState('');

  const dispatch = useDispatch<AppDispatch>();

  // Validation logic
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

  // Function to create a user
  const createUser = async () => {
    const error = validateInputs();
    if (error) {
      setErrorInput(error);
      return;
    }

    setErrorInput('');
    setLoading(true);

    try {
      // Dispatch the sign-up action
      await dispatch(
        signUpSlice({
          name,
          email,
          password,
        }),
      ).unwrap();

      // Handle success (optional: navigate to another screen)
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
