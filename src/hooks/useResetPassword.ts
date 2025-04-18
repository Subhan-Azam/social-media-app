import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {ShowToast} from '../components/toastMessage/ToastMessage';

const useResetPassword = () => {
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const navigation = useNavigation();

  const userValidation = () => {
    if (
      !oldPassword?.trim() ||
      !newPassword?.trim() ||
      !confirmPassword?.trim()
    ) {
      return 'All fields are required';
    }
    if (newPassword.length < 6) {
      return 'Password must be at least 6 characters.';
    }
    if (newPassword !== confirmPassword) {
      return 'New password does not match';
    }
    return null;
  };

  const resetPassword = async () => {
    const isValid = userValidation();
    if (isValid) {
      setError(isValid);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const user = auth().currentUser;
      if (!user) {
        throw new Error('No user is currently signed in');
      }

      const credential = auth.EmailAuthProvider.credential(
        user?.email ?? '',
        oldPassword ?? '',
      );
      await user.reauthenticateWithCredential(credential);
      await user.updatePassword(newPassword ?? '');

      navigation?.goBack();

      ShowToast('success', 'success', 'Password changed successful');
    } catch (err2: unknown) {
      if (err2 instanceof Error) {
        setError(err2.message ?? 'An unknown error occurred');
      } else {
        setError('Failed to update password');
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    oldPassword,
    setOldPassword,
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    loading,
    error,
    resetPassword,
  };
};

export default useResetPassword;
