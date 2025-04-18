import {useEffect, useState} from 'react';
import {fetchPosts} from '../store/slices/fetchAllPostsSlice';
import auth from '@react-native-firebase/auth';
import {useAppDispatch, useAppSelector} from './useRedux';
import {ShowToast} from '../components/toastMessage/ToastMessage';

const useSelfPost = () => {
  const [currentUserUID, setCurrentUserUID] = useState<string | null>(null);
  const [logoutLoading, setLogoutLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const {posts, loading, error} = useAppSelector(state => state.allPostReducer);

  useEffect(() => {
    const user = auth().currentUser;
    if (user?.uid) {
      setCurrentUserUID(user.uid);
    } else {
      setCurrentUserUID(null);
    }
  }, []);

  useEffect(() => {
    if (currentUserUID && dispatch) {
      dispatch(fetchPosts());
    }
  }, [currentUserUID]);

  const eachUserPost = posts?.filter(post => post?.userUID === currentUserUID);

  // Handle Logout
  const handleLogout = async () => {
    setLogoutLoading(true);
    try {
      await auth().signOut();
      ShowToast('info', 'LogOut', 'You are successfully logged out.');
      setCurrentUserUID(null);
    } catch (err: unknown) {
      let errorMessage = 'Error in logout.';

      if (err instanceof Error) {
        errorMessage = err.message ?? 'An unknown error occurred';
      }

      ShowToast('error', 'Logout Failed', errorMessage);
    } finally {
      setLogoutLoading(false);
    }
  };

  return {posts: eachUserPost, loading, error, handleLogout, logoutLoading};
};

export default useSelfPost;
