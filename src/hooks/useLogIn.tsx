import {useDispatch, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {
  setEmail,
  setPassword,
  setErrorInput,
  setLoading,
  resetForm,
} from '../store/slices/logInSlice';
import {RootState} from '../store/store';

const useLogIn = () => {
  const dispatch = useDispatch();
  // const { email, password, errorInput, loading } = useSelector((state: RootState) => state.logInStore);
  const {email, password, errorInput, loading} = useSelector(
    (state: RootState) => state.logInStore,
  );
  const userValidation = () => {
    if (!email.trim() || !password.trim()) {
      dispatch(setErrorInput('All Fields are required.'));
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email.trim())) {
      dispatch(setErrorInput('Please enter a valid email address.'));
      return false;
    }
    return true;
  };

  const userLogin = async () => {
    if (!userValidation()) {
      return;
    }

    try {
      dispatch(setLoading(true));
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );

      const userDoc = await firestore()
        .collection('users')
        .doc(userCredential.user.uid)
        .get();
      if (!userDoc.exists) {
        await auth().signOut();
        dispatch(setErrorInput('User not found in the database.'));
        return;
      }

      dispatch(resetForm());
    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        dispatch(setErrorInput('No user found with this email.'));
      } else if (error.code === 'auth/wrong-password') {
        dispatch(setErrorInput('Incorrect password.'));
      } else {
        dispatch(setErrorInput('An unexpected error occurred.'));
      }
    } finally {
      dispatch(setLoading(false));
    }
  };

  return {
    email,
    setEmail: (text: string) => dispatch(setEmail(text)),
    password,
    setPassword: (text: string) => dispatch(setPassword(text)),
    errorInput,
    loading,
    userLogin,
  };
};

export default useLogIn;
