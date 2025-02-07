import {useDispatch} from 'react-redux';
import {AppDispatch} from '../store/store';
import {forgetPasswordSlice} from '../store/slices/authSlice';
import {useState} from 'react';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';

const useForgetPass = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorInput, setErrorInput] = useState<string | null>('');

  const navigation = useNavigation();
  const dispatch: AppDispatch = useDispatch();
  const validateInputs = () => {
    if (
      !email.trim() ||
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      return 'Invalid email address.';
    }
    return null;
  };

  const forgetPassword = async (email: string) => {
    const error = validateInputs();
    if (error) {
      setErrorInput(error);
      return;
    }

    setLoading(true);

    try {
      await dispatch(forgetPasswordSlice({email})).unwrap();
      Toast.show({
        type: 'info',
        text1: 'Send Link',
        text2: 'Please check your email for reset password',
      });
      navigation.goBack();
    } catch (err: any) {
      setErrorInput(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const handleForgetPassword = async () => {
    await forgetPassword(email);
  };

  return {
    email,
    setEmail,
    loading,
    errorInput,
    handleForgetPassword,
  };
};

export default useForgetPass;
