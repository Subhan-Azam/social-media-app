import {useDispatch} from 'react-redux';
import {AppDispatch} from '../store/store';
import {forgetPasswordSlice} from '../store/slices/authSlice';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ShowToast} from '../components/toastMessage/ToastMessage';

const useForgetPass = () => {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorInput, setErrorInput] = useState<string | null>(null);

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

  const forgetPassword = async (emailParam: string | null | undefined) => {
    const emailToUse = emailParam ?? email;
    const error = validateInputs();
    if (error) {
      setErrorInput(error);
      return;
    }

    setLoading(true);

    try {
      if (dispatch) {
        await dispatch(forgetPasswordSlice({email: emailToUse ?? ''})).unwrap();
        ShowToast(
          'info',
          'Send Link',
          'Please check your email for reset password',
        );
        navigation?.goBack();
      } else {
        throw new Error('Dispatch is not available');
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorInput(err.message ?? 'An unknown error occurred');
      } else {
        setErrorInput('An unexpected error occurred.');
      }
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
