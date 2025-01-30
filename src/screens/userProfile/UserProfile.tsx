// import {ScrollView, StyleSheet, View} from 'react-native';
// import React from 'react';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import UserBio from '../../components/userBio/UserBio';
// import ProfileGridIcon from '../../components/profileGridIcon/ProfileGridIcon';
// // import AllPosts from '../../components/allPosts/AllPosts';

// const UserProfile = () => {
//   return (
//     <ScrollView>
//       <SafeAreaView style={styles.container}>
//         <UserBio userName={'subhan'} />
//         <ProfileGridIcon />

//         <View style={styles.postsContainer}>
//           {/* <AllPosts key={index} post={post} /> */}
//         </View>
//       </SafeAreaView>
//     </ScrollView>
//   );
// };

// export default UserProfile;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 10,
//   },
//   postsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
// });

import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import UserBio from '../../components/userBio/UserBio';
import ProfileGridIcon from '../../components/profileGridIcon/ProfileGridIcon';
import {useRoute} from '@react-navigation/native';
import useFetchUserPosts from '../../hooks/useEachUserPost';
import AllPosts from '../../components/allPosts/AllPosts';
import {UserProfileRouteProp} from '../../types/types';

const UserProfile = () => {
  const route = useRoute<UserProfileRouteProp>();
  const {userId} = route.params;
  const {posts, loading, error} = useFetchUserPosts(userId);

  const userName = posts.length > 0 ? posts[0].userName : 'Unknown User';

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <UserBio userName={userName} />
        <ProfileGridIcon />

        <View style={styles.postsContainer}>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : error ? (
            <Text style={styles.errorText}>Error fetching posts</Text>
          ) : posts.length === 0 ? (
            <Text style={styles.noPostText}>No posts available.</Text>
          ) : (
            posts.map((post, index) => <AllPosts key={index} post={post} />)
          )}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  postsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  noPostText: {
    textAlign: 'center',
    marginTop: 20,
  },
});
