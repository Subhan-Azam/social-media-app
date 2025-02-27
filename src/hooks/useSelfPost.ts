import {useEffect, useState} from 'react';
import {fetchPosts} from '../store/slices/fetchAllPostsSlice';
import auth from '@react-native-firebase/auth';
import { useAppDispatch, useAppSelector } from './useRedux';

const useSelfPost = () => {
  const [currentUserUID, setCurrentUserUID] = useState<string | null>(null);

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

  return {posts: eachUserPost, loading, error};
};

export default useSelfPost;
