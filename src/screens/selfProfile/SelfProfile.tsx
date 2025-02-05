// import {
//   ActivityIndicator,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import React from 'react';
// import UserBio from '../../components/userBio/UserBio';
// import ProfileGridIcon from '../../components/profileGridIcon/ProfileGridIcon';
// import EditProfileBtn from '../../components/Buttons/EditProfileBtn';
// import AllPosts from '../../components/allPosts/AllPosts';
// import useSelfPost from '../../hooks/useSelfPost';
// import {Props} from '../../types/types';

// const SelfProfile: React.FC<Props> = ({navigation}) => {
//   const {posts, loading, error} = useSelfPost();

//   const userName = posts.length > 0 ? posts[0].userName : 'Unknown User';

//   return (
//     <ScrollView>
//       <SafeAreaView style={styles.container}>
//         <UserBio userName={userName} />
//         <EditProfileBtn onPress={() => navigation.navigate('EditProfile')} />
//         <ProfileGridIcon />

//         {error ? (
//           <Text>Failed To load Posts</Text>
//         ) : loading ? (
//           <ActivityIndicator />
//         ) : posts.length > 0 ? (
//           <View style={styles.postsContainer}>
//             {posts.map((post, index) => (
//               <AllPosts key={index} post={post} />
//             ))}
//           </View>
//         ) : (
//           <Text>No post found</Text>
//         )}
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
//   postsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
// });

import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React from 'react';
import EditProfileBtn from '../../components/Buttons/EditProfileBtn';
import AllPosts from '../../components/allPosts/AllPosts';
import useSelfPost from '../../hooks/useSelfPost';
import SelfBio from '../../components/selfBio/SelfBio';
import ProfileGridIcon from '../../components/profileGridIcon/ProfileGridIcon';
import {Props} from '../../types/types';
import LogOut from '../../components/logOut/LogOut';

const SelfProfile: React.FC<Props> = ({navigation}) => {
  const {posts, loading, error} = useSelfPost();

  // const userName = posts.length > 0 ? posts[0].userName : 'Unknown User';

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <SelfBio />
        <EditProfileBtn onPress={() => navigation.navigate('EditProfile')} />
        <LogOut />
        <ProfileGridIcon />

        {error ? (
          <Text>Failed To load Posts</Text>
        ) : loading ? (
          <ActivityIndicator />
        ) : posts.length > 0 ? (
          <View style={styles.postsContainer}>
            {posts.map((post, index) => (
              <AllPosts key={index} post={post} />
            ))}
          </View>
        ) : (
          <Text>No post found</Text>
        )}
      </SafeAreaView>
    </ScrollView>
  );
};

export default SelfProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  postsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
