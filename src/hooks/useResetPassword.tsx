import {useState} from 'react';
// import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';

const useResetPassword = () => {
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const navigation = useNavigation();

  const userValidation = () => {
    if (!oldPassword || !newPassword || !confirmPassword) {
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

      const credential = auth.EmailAuthProvider.credential(
        user?.email || '',
        oldPassword,
      );
      await user?.reauthenticateWithCredential(credential);
      await user?.updatePassword(newPassword);

      navigation.goBack();

      Toast.show({
        type: 'success',
        text1: 'success',
        text2: 'Password changed successful',
      });
    } catch (err2: any) {
      setError('Failed to update password');
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
