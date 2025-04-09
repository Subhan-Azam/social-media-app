import {useEffect} from 'react';
import {fetchPosts} from '../store/slices/fetchAllPostsSlice';
import {useAppDispatch, useAppSelector} from './useRedux';

const useFetchAllPosts = () => {
  const dispatch = useAppDispatch();
  const {posts, loading, error} = useAppSelector(state => state.allPostReducer);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return {posts, loading, error};
};

export default useFetchAllPosts;
