import {StyleSheet, View, Image, ScrollView} from 'react-native';
import React from 'react';
import UserPost from '../../components/userPost/UserPost';
import LogOut from '../../components/logOut/LogOut';

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.instaImgBox}>
          <Image source={require('../../assets/images/InstagramLogo.png')} />
        </View>
        <View style={styles.line} />
        <LogOut />

        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
      </View>
    </ScrollView>
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
});

// import React from 'react';
// import {
//   // ScrollView,
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   FlatList,
// } from 'react-native';

// const posts = [
//   {
//     id: '1',
//     username: 'joshua_l',
//     location: 'Tokyo, Japan',
//     image: 'https://via.placeholder.com/400x300', // Replace with actual image URL
//     caption: 'The game in Japan was amazing and I want to share some photos',
//     date: 'September 19',
//   },
//   {
//     id: '2',
//     username: 'joshua_l',
//     location: 'New York, USA',
//     image: 'https://via.placeholder.com/400x300', // Replace with actual image URL
//     caption: 'Exploring the Big Apple!',
//     date: 'October 2',
//   },
//   // Add more posts as needed
// ];

// const Home = () => {
//   const renderPost = ({item}: {item: (typeof posts)[0]}) => (
//     <View style={styles.postContainer}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Image
//           source={{
//             uri: 'https://via.placeholder.com/50',
//           }} // Replace with actual profile image URL
//           style={styles.profileImage}
//         />
//         <View>
//           <Text style={styles.username}>{item.username}</Text>
//           <Text style={styles.location}>{item.location}</Text>
//         </View>
//       </View>

//       {/* Post Image */}
//       <Image source={{uri: item.image}} style={styles.postImage} />

//       {/* Caption */}
//       <Text style={styles.caption}>
//         <Text style={styles.username}>{item.username} </Text>
//         {item.caption}
//       </Text>

//       {/* Date */}
//       <Text style={styles.date}>{item.date}</Text>
//     </View>
//   );

//   return (
//     <FlatList
//       data={posts}
//       keyExtractor={item => item.id}
//       renderItem={renderPost}
//       contentContainerStyle={styles.container}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingBottom: 20,
//   },
//   postContainer: {
//     marginBottom: 20,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//   },
//   profileImage: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 10,
//   },
//   username: {
//     fontWeight: 'bold',
//     fontSize: 14,
//   },
//   location: {
//     color: '#888',
//     fontSize: 12,
//   },
//   postImage: {
//     width: '100%',
//     height: 300,
//     resizeMode: 'cover',
//   },
//   caption: {
//     padding: 10,
//     fontSize: 14,
//   },
//   date: {
//     paddingHorizontal: 10,
//     fontSize: 12,
//     color: '#888',
//     marginTop: 5,
//   },
// });

// export default Home;
