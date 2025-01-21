import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

const useLogIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorInput, setErrorInput] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const userValidation = () => {
    if (!email.trim() || !password.trim()) {
      setErrorInput('All Fields are required.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email.trim())) {
      setErrorInput('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const userLogin = async () => {
    if (!userValidation()) {
      return;
    }

    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(email, password);
      Alert.alert('Success', 'Logged in successfully!');
      setEmail('');
      setPassword('');
      setErrorInput(null);
    } 
    catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        setErrorInput('No user found with this email.');
      } else if (error.code === 'auth/wrong-password') {
        setErrorInput('Incorrect password.');
      } else {
        setErrorInput('An unexpected error occurred.');
      }
    } 
    finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    errorInput,
    loading,
    userLogin,
  };
};

export default useLogIn;
