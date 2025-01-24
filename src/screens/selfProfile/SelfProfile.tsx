import {StyleSheet, View} from 'react-native';
import React from 'react';
import UserBio from '../../components/userBio/UserBio';

const SelfProfile = () => {
  return (
    <View style={styles.container}>
      <UserBio />
    </View>
  );
};

export default SelfProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
