import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import UserBio from '../../components/userBio/UserBio';
import ProfileGridIcon from '../../components/profileGridIcon/ProfileGridIcon';
// import AllPosts from '../../components/allPosts/AllPosts';

const UserProfile = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <UserBio userName={'subhan'} />
        <ProfileGridIcon />

        <View style={styles.postsContainer}>
          {/* <AllPosts key={index} post={post} /> */}
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
});
