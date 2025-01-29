// import {useEffect} from 'react';
// import {fetchPosts} from '../store/slices/fetchAllPostsSlice';
// import useAppSelector from './useAppSelector';
// import useAppDispatch from './useAppDispatch';

// const useFetchAllPosts = () => {
//   const dispatch = useAppDispatch();

//   const {posts, loading, error} = useAppSelector(state => state.allPostStore);

//   useEffect(() => {
//     dispatch(fetchPosts());
//   }, [dispatch]);

//   return {posts, loading, error};
// };

// export default useFetchAllPosts;

import {useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import useAppDispatch from './useAppDispatch';
import useAppSelector from './useAppSelector';
import {setRealTimePosts} from '../store/slices/fetchAllPostsSlice';

const useFetchAllPosts = () => {
  const dispatch = useAppDispatch();
  const {posts, loading, error} = useAppSelector(state => state.allPostStore);

  useEffect(() => {
    // Real-time listener for post updates
    const unsubscribe = firestore()
      .collection('posts')
      .orderBy('createdAt', 'desc')
      .onSnapshot(
        snapshot => {
          const updatedPosts = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate().toISOString(),
          }));
          dispatch(setRealTimePosts(updatedPosts));
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
