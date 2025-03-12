import {useEffect, useState} from 'react';
import {fetchPosts} from '../store/slices/fetchAllPostsSlice';
import auth from '@react-native-firebase/auth';
import {useAppDispatch, useAppSelector} from './useRedux';
import {ShowToast} from '../components/toastMessage/ToastMessage';

const useSelfPost = () => {
  const [currentUserUID, setCurrentUserUID] = useState<string | null>(null);
  const [logoutLoading, setLogoutLoading] = useState(false);

  const dispatch = useAppDispatch();
  const {posts, loading, error} = useAppSelector(state => state.allPostReducer);

  useEffect(() => {
    const user = auth().currentUser;
    if (user) {
      setCurrentUserUID(user.uid);
    }
  }, []);

  useEffect(() => {
    if (currentUserUID) {
      dispatch(fetchPosts());
    }
  }, [dispatch, currentUserUID]);

  const eachUserPost = posts.filter(post => post.userUID === currentUserUID);

  // Handle Logout
  const handleLogout = async () => {
    setLogoutLoading(true);
    try {
      await auth().signOut();
      ShowToast('info', 'LogOut', 'You are successfully logged out.');
    } catch (err: unknown) {
      let errorMessage = 'Error in logout.';

      if (err instanceof Error) {
        errorMessage = err.message;
      }

      ShowToast('error', 'Logout Failed', errorMessage);
    } finally {
      setLogoutLoading(false);
    }
  };

  return {posts: eachUserPost, loading, error, handleLogout, logoutLoading};
};

export default useSelfPost;
