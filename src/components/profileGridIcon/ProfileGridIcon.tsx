import {Image, StyleSheet} from 'react-native';
import React from 'react';

const ProfileGridIcon = () => {
  return (
    <Image
      style={styles.gridIcon}
      source={require('../../assets/images/Tabs.png')}
    />
  );
};

export default ProfileGridIcon;

const styles = StyleSheet.create({
  gridIcon: {
    width: '100%',
  },
});
