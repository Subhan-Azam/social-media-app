import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React from 'react';
import UserBio from '../../components/userBio/UserBio';
import ProfileGridIcon from '../../components/profileGridIcon/ProfileGridIcon';
import EditProfileBtn from '../../components/Buttons/EditProfileBtn';
import AllPosts from '../../components/allPosts/AllPosts';
import useSelfPost from '../../hooks/useSelfPost';

type LogInProps = {
  navigation: {
    navigate: (screen: string) => void;
  };
};
const SelfProfile: React.FC<LogInProps> = ({navigation}) => {
  const {posts, loading, error} = useSelfPost();

  const userName = posts.length > 0 ? posts[0].userName : 'Unknown User';

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <UserBio userName={userName} />
        <EditProfileBtn onPress={() => navigation.navigate('EditProfile')} />
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
