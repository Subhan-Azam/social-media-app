import {useEffect, useState} from 'react';
import {fetchPosts} from '../store/slices/fetchAllPostsSlice';
import auth from '@react-native-firebase/auth';
import {useAppDispatch, useAppSelector} from './useRedux';
import Toast from 'react-native-toast-message';

const useSelfPost = () => {
  const [currentUserUID, setCurrentUserUID] = useState<string | null>(null);
  const [logoutLoading, setLogoutLoading] = useState(false);

  const dispatch = useAppDispatch();
  const {posts, loading, error} = useAppSelector(state => state.allPostStore);

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
      Toast.show({
        type: 'info',
        text1: 'LogOut',
        text2: 'You are successfully logged out',
      });
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: error.message,
        text2: 'Error in logout',
      });
    } finally {
      setLogoutLoading(false);
    }
  };

  return {posts: eachUserPost, loading, error, handleLogout, logoutLoading};
};

export default useSelfPost;
