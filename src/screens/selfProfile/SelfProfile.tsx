import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React from 'react';
import EditProfileBtn from '../../components/Buttons/EditProfileBtn';
import AllPosts from '../../components/allPosts/AllPosts';
import useSelfPost from '../../hooks/useSelfPost';
import SelfBio from '../../components/selfBio/SelfBio';
import ProfileGridIcon from '../../components/profileGridIcon/ProfileGridIcon';
import LogOut from '../../components/logOut/LogOut';
import Loader from '../../components/loader/Loader';
import {SelfProfileProps} from '../../types/types';

const SelfProfile: React.FC<SelfProfileProps> = ({navigation}) => {
  const {posts, loading, error} = useSelfPost();

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <SelfBio />
        <EditProfileBtn onPress={() => navigation.navigate('EditProfile')} />
        <LogOut />
        <ProfileGridIcon />

        {error ? (
          <Text style={styles.noPostText}>Failed To load Posts</Text>
        ) : loading ? (
          <Loader />
        ) : posts.length > 0 ? (
          <View style={styles.postsContainer}>
            {posts.map((post, index) => (
              <AllPosts key={index} post={post} />
            ))}
          </View>
        ) : (
          <Text style={styles.noPostText}>No post found</Text>
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
  noPostText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
    textAlign: 'center',
    marginTop: 10,
  },
  postsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
