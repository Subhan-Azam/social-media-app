import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import UserPost from '../../components/userPost/UserPost';
import useFetchAllPosts from '../../hooks/useFetchAllPosts';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = () => {
  const {posts, loading, error} = useFetchAllPosts();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.instaImgBox}>
          <Image source={require('../../assets/images/InstagramLogo.png')} />
        </View>
        <View style={styles.line} />

        {error ? (
          <Text>Failed to fetch posts</Text>
        ) : loading ? (
          <ActivityIndicator />
        ) : posts.length === 0 ? (
          <Text style={styles.noPostText}>No posts available.</Text>
        ) : (
          posts.map(post => <UserPost key={post.id} post={post} />)
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  instaImgBox: {
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 10,
    backgroundColor: '#FAFAFA',
    width: '100%',
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: '#A6A6AA',
  },
  noPostText: {
    position: 'absolute',
    top: 100,
    left: 100,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
});

// import React, {useEffect, useState} from 'react';
// import {StyleSheet, View, Image, ScrollView, Alert} from 'react-native';
// import firestore from '@react-native-firebase/firestore';
// import UserPost from '../../components/userPost/UserPost';
// import LogOut from '../../components/logOut/LogOut';

// const Home = () => {
//   // State to store posts
//   const [posts, setPosts] = useState<any[]>([]);

//   // Fetch posts from Firestore when the component mounts
//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const snapshot = await firestore()
//           .collection('posts')
//           .orderBy('createdAt', 'desc')
//           .get();

//         const fetchedPosts = snapshot.docs.map(doc => doc.data());
//         setPosts(fetchedPosts);
//       } catch (error) {
//         console.error('Error fetching posts:', error);
//         Alert.alert('Error', 'Failed to load posts');
//       }
//     };

//     fetchPosts();
//   }, [posts]);

//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <View style={styles.instaImgBox}>
//           <Image source={require('../../assets/images/InstagramLogo.png')} />
//         </View>
//         <View style={styles.line} />
//         <LogOut />

//         {/* Render posts dynamically */}
//         {posts.map((post, index) => (
//           <UserPost key={index} post={post} />
//         ))}
//       </View>
//     </ScrollView>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   instaImgBox: {
//     alignItems: 'center',
//     paddingVertical: 10,
//     marginTop: 10,
//     backgroundColor: '#FAFAFA',
//     width: '100%',
//   },
//   line: {
//     height: 1,
//     width: '100%',
//     backgroundColor: '#A6A6AA',
//   },
// });
