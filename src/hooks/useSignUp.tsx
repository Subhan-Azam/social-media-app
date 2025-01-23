import auth from '@react-native-firebase/auth';
// import {useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import {
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
  setErrorInput,
  setLoading,
  resetForm,
} from '../store/slices/signUpSlice';
import {RootState} from '../store/store';

const useSignUp = () => {
  const dispatch = useDispatch();
  const {name, email, password, confirmPassword, errorInput, loading} =
    useSelector((state: RootState) => state.signUpStore);

  const userValidation = () => {
    if (!name || !email || !password || !confirmPassword) {
      console.log('Error', 'All Fields are required.');
      dispatch(setErrorInput('All Fields are required.'));
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      console.log('Error', 'Please enter a valid email address.');
      dispatch(setErrorInput('Please enter a valid email address.'));
      return false;
    }
    if (password.length < 6 || confirmPassword.length < 6) {
      console.log('Error', 'minimum 6 character require');
      dispatch(setErrorInput('minimum 6 character require'));
      return false;
    }
    if (password !== confirmPassword) {
      console.log('Error', 'Passwords do not match.');
      dispatch(setErrorInput('Passwords do not match.'));
      return false;
    }
    return true;
  };

  const createUser = async () => {
    if (!userValidation()) {
      return;
    }

    try {
      dispatch(setLoading(true));
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      const userId = userCredential.user.uid;

      await auth().currentUser?.updateProfile({displayName: name});

      await firestore().collection('users').doc(userId).set({
        id: userId,
        name,
        email,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

      dispatch(resetForm());
      Alert.alert('user successfully sign in!');
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('user already in use!');
        dispatch(setErrorInput('user already in use!'));
      } else if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
        dispatch(setErrorInput('That email address is invalid!'));
      } else {
        console.error('Error: ', error);
        dispatch(setErrorInput('An unexpected error occurred.'));
      }
    } finally {
      setLoading(false);
    }
  };
  return {
    name,
    setName: (text: string) => dispatch(setName(text)),
    email,
    setEmail: (text: string) => dispatch(setEmail(text)),
    password,
    setPassword: (text: string) => dispatch(setPassword(text)),
    confirmPassword,
    setConfirmPassword: (text: string) => dispatch(setConfirmPassword(text)),
    loading,
    createUser,
    errorInput,
  };
};

export default useSignUp;
