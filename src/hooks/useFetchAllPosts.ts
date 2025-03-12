import {useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {fetchPosts} from '../store/slices/fetchAllPostsSlice';
import {useAppDispatch, useAppSelector} from './useRedux';

const useFetchAllPosts = () => {
  const dispatch = useAppDispatch();
  const {posts, loading, error} = useAppSelector(state => state.allPostReducer);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('posts')
      .orderBy('createdAt', 'desc')
      .onSnapshot(
        snapshot => {
          const updatedPosts = snapshot.docs?.map(doc => ({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate().toISOString(),
          }));

          dispatch(fetchPosts(updatedPosts));
        },
        err => {
          console.error('Error fetching posts: ', err);
        },
      );

    return () => unsubscribe();
  }, [dispatch]);

  return {posts, loading, error};
};

export default useFetchAllPosts;
