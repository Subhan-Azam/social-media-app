// import firestore from '@react-native-firebase/firestore';
// import {useEffect, useState} from 'react';
// import {Post} from '../types/types';

// const useEachProductPost = async (userId: string) => {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const querySnapshot = await firestore()
//           .collection('posts')
//           .where('userUID', '==', userId)
//           .get();
//         console.log('querySnapshot=======', querySnapshot);

//         const userPosts: Post[] = querySnapshot.docs.map(doc => ({
//           uid: doc.id,
//           ...(doc.data() as Post),
//         }));
//         console.log('userPosts==============', userPosts);

//         setPosts(userPosts);
//       } catch (err: any) {
//         setError((err as Error).message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, [userId]);

//   return {
//     posts,
//     loading,
//     error,
//   };
// };

// export default useEachProductPost;

import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {Post} from '../types/types';

const useFetchUserPosts = (userId: string) => {
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

export default useFetchUserPosts;
