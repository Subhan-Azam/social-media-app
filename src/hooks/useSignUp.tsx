import auth from '@react-native-firebase/auth';
import {useState} from 'react';
import {Alert} from 'react-native';

const useSignUp = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorInput, setErrorInput] = useState<string | null>(null);

  const userValidation = () => {
    if (!name || !email || !password || !confirmPassword) {
      console.log('Error', 'All Fields are required.');
      setErrorInput('All Fields are required.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      console.log('Error', 'Please enter a valid email address.');
      setErrorInput('Please enter a valid email address.');
      return false;
    }
    if (password.length < 6 || confirmPassword.length < 6) {
      console.log('Error', 'minimum 6 character require');
      setErrorInput('minimum 6 character require');
      return false;
    }
    if (password !== confirmPassword) {
      console.log('Error', 'Passwords do not match.');
      setErrorInput('Passwords do not match.');
      return false;
    }
    return true;
  };

  const createUser = async () => {
    if (!userValidation()) {
      return;
    }

    try {
      setLoading(true);
      await auth().createUserWithEmailAndPassword(email, password);
      Alert.alert('user successfully sign in!');
      await auth().currentUser?.updateProfile({displayName: name});
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setErrorInput(null);
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('user already in use!');
        setErrorInput('user already in use!');
      } else if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
        setErrorInput('That email address is invalid!');
      } else {
        console.error('Error: ', error);
        setErrorInput('An unexpected error occurred.');
      }
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
    createUser,
    errorInput,
  };
};

export default useSignUp;
