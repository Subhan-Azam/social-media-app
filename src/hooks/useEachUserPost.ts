import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {UserProps} from '../types/types';
import {UserData} from '../types/types';
import {COLLECTIONS} from '../constants/dbCollection';

const useEachUserPost = (userId: string) => {
  const [posts, setPosts] = useState<UserProps[]>([]);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      setError('No user ID provided');
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const [postSnapshot, userDoc] = await Promise.all([
          firestore()
            .collection(COLLECTIONS.POST)
            .where('userUID', '==', userId)
            .get(),
          firestore().collection(COLLECTIONS.USER).doc(userId).get(),
        ]);

        const userPosts: UserProps[] =
          postSnapshot.docs?.map(doc => ({
            uid: doc.id,
            ...(doc.data() as UserProps),
          })) ?? [];
        setPosts(userPosts);

        const getUserData = userDoc?.data();

        if (userDoc.exists && getUserData) {
          setUserData({
            officialImg: getUserData.officialImg ?? '',
            name: getUserData.name ?? '',
            userName: getUserData.userName ?? '',
            bio: getUserData.bio ?? '',
          });
        } else {
          setUserData(null);
        }
      } catch (err) {
        setError((err as Error).message ?? 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return {posts, userData, loading, error};
};

export default useEachUserPost;
