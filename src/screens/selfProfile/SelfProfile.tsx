// import {ScrollView, StyleSheet} from 'react-native';
// import React from 'react';
// import UserBio from '../../components/userBio/UserBio';
// import ProfileGridIcon from '../../components/profileGridIcon/ProfileGridIcon';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import EditProfileBtn from '../../components/Buttons/EditProfileBtn';
// import AllPosts from '../../components/allPosts/AllPosts';

// type LogInProps = {
//   navigation: {
//     navigate: (screen: string) => void;
//   };
// };
// const SelfProfile: React.FC<LogInProps> = ({navigation}) => {
//   return (
//     <ScrollView>
//       <SafeAreaView style={styles.container}>
//         <UserBio />
//         <EditProfileBtn onPress={() => navigation.navigate('EditProfile')} />
//         <ProfileGridIcon />
//         <AllPosts />
//       </SafeAreaView>
//     </ScrollView>
//   );
// };

// export default SelfProfile;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 10,
//   },
// });

import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, StyleSheet, Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'; // To fetch the current user UID

const HomeScreen = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const userUID = auth().currentUser?.uid; // Get the UID of the logged-in user

      if (!userUID) {
        Alert.alert('User not logged in');
        return;
      }

      try {
        const snapshot = await firestore()
          .collection('posts')
          .where('userUID', '==', userUID) // Filter posts by the logged-in user's UID
          .orderBy('createdAt', 'desc')
          .get();

        const fetchedPosts = snapshot.docs.map(doc => doc.data());
        setPosts(fetchedPosts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        Alert.alert('Error', 'Failed to load posts');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array ensures it runs only once after mount

  const renderPost = ({item}: {item: any}) => (
    <View style={styles.postContainer}>
      <Image source={{uri: item.imageUrl}} style={styles.postImage} />
      <Text style={styles.userName}>{item.userName}</Text>{' '}
      {/* Display user name */}
      <Text style={styles.postDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Posts</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={posts}
          renderItem={renderPost}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },
  postContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  postDescription: {
    marginTop: 10,
    fontSize: 16,
  },
});
