import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {Post} from '../types/types';

const useEachUserPost = (userId: string) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) {
      return;
    }

    const fetchPosts = async () => {
      try {
        const querySnapshot = await firestore()
          .collection('posts')
          .where('userUID', '==', userId)
          .get();

        const userPosts: Post[] = querySnapshot.docs.map(doc => ({
          uid: doc.id,
          ...(doc.data() as Post),
        }));

        setPosts(userPosts);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [userId]);

  return {posts, loading, error};
};

export default useEachUserPost;
