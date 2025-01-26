// import {StyleSheet, View, Image, ScrollView} from 'react-native';
// import React from 'react';
// import UserPost from '../../components/userPost/UserPost';
// import LogOut from '../../components/logOut/LogOut';

// const Home = () => {
//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <View style={styles.instaImgBox}>
//           <Image source={require('../../assets/images/InstagramLogo.png')} />
//         </View>
//         <View style={styles.line} />
//         <LogOut />

//         <UserPost />
//         <UserPost />
//         <UserPost />
//         <UserPost />
//         <UserPost />
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

// // import React from 'react';
// // import {
// //   // ScrollView,
// //   View,
// //   Text,
// //   Image,
// //   StyleSheet,
// //   FlatList,
// // } from 'react-native';

// // const posts = [
// //   {
// //     id: '1',
// //     username: 'joshua_l',
// //     location: 'Tokyo, Japan',
// //     image: 'https://via.placeholder.com/400x300', // Replace with actual image URL
// //     caption: 'The game in Japan was amazing and I want to share some photos',
// //     date: 'September 19',
// //   },
// //   {
// //     id: '2',
// //     username: 'joshua_l',
// //     location: 'New York, USA',
// //     image: 'https://via.placeholder.com/400x300', // Replace with actual image URL
// //     caption: 'Exploring the Big Apple!',
// //     date: 'October 2',
// //   },
// //   // Add more posts as needed
// // ];

// // const Home = () => {
// //   const renderPost = ({item}: {item: (typeof posts)[0]}) => (
// //     <View style={styles.postContainer}>
// //       {/* Header */}
// //       <View style={styles.header}>
// //         <Image
// //           source={{
// //             uri: 'https://via.placeholder.com/50',
// //           }} // Replace with actual profile image URL
// //           style={styles.profileImage}
// //         />
// //         <View>
// //           <Text style={styles.username}>{item.username}</Text>
// //           <Text style={styles.location}>{item.location}</Text>
// //         </View>
// //       </View>

// //       {/* Post Image */}
// //       <Image source={{uri: item.image}} style={styles.postImage} />

// //       {/* Caption */}
// //       <Text style={styles.caption}>
// //         <Text style={styles.username}>{item.username} </Text>
// //         {item.caption}
// //       </Text>

// //       {/* Date */}
// //       <Text style={styles.date}>{item.date}</Text>
// //     </View>
// //   );

// //   return (
// //     <FlatList
// //       data={posts}
// //       keyExtractor={item => item.id}
// //       renderItem={renderPost}
// //       contentContainerStyle={styles.container}
// //     />
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     paddingBottom: 20,
// //   },
// //   postContainer: {
// //     marginBottom: 20,
// //     backgroundColor: '#fff',
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     padding: 10,
// //   },
// //   profileImage: {
// //     width: 40,
// //     height: 40,
// //     borderRadius: 20,
// //     marginRight: 10,
// //   },
// //   username: {
// //     fontWeight: 'bold',
// //     fontSize: 14,
// //   },
// //   location: {
// //     color: '#888',
// //     fontSize: 12,
// //   },
// //   postImage: {
// //     width: '100%',
// //     height: 300,
// //     resizeMode: 'cover',
// //   },
// //   caption: {
// //     padding: 10,
// //     fontSize: 14,
// //   },
// //   date: {
// //     paddingHorizontal: 10,
// //     fontSize: 12,
// //     color: '#888',
// //     marginTop: 5,
// //   },
// // });

// // export default Home;



import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, StyleSheet, Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const HomeScreen = () => {
  // State to store posts
  const [posts, setPosts] = useState<any[]>([]);

  // Fetch posts from Firestore when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const snapshot = await firestore()
          .collection('posts')
          .orderBy('createdAt', 'desc')
          .get();
        const fetchedPosts = snapshot.docs.map(doc => doc.data());
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
        Alert.alert('Error', 'Failed to load posts');
      }
    };

    fetchPosts();
  }, []); // Empty dependency array ensures it runs only once after mount

  // Render individual post
  const renderPost = ({item}: {item: any}) => (
    <View style={styles.postContainer}>
      <Image source={{uri: item.imageUrl}} style={styles.postImage} />
      <Text style={styles.postDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home</Text>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item, index) => index.toString()}
      />
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
  postDescription: {
    marginTop: 10,
    fontSize: 16,
  },
});
