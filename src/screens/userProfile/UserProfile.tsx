import {ScrollView, StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import UserBio from '../../components/userBio/UserBio';
import GridIcon from '../../components/gridIcon/GridIcon';
import {useRoute} from '@react-navigation/native';
import useEachUserPost from '../../hooks/useEachUserPost';
import AllPosts from '../../components/allPosts/AllPosts';
import Loader from '../../components/loader/Loader';
import {UserProfileRouteProp} from '../../types/types';

const UserProfile = () => {
  const route = useRoute<UserProfileRouteProp>();
  const {userId} = route.params;
  const {posts, userData, loading, error} = useEachUserPost(userId);

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <UserBio
          officialImg={userData?.officialImg}
          name={userData?.name}
          userName={userData?.userName}
          bio={userData?.bio}
        />

        <GridIcon />

        <View style={styles.postsContainer}>
          {error ? (
            <Text style={styles.errorText}>Error fetching posts</Text>
          ) : loading ? (
            <Loader />
          ) : posts.length === 0 ? (
            <Text style={styles.noPostText}>No posts available.</Text>
          ) : (
            posts?.map((post, index) => <AllPosts key={index} post={post} />)
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
  activityIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  noPostText: {
    textAlign: 'center',
    marginTop: 20,
  },
});
