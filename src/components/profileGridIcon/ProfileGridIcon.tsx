import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProfileGridIcon = () => {
  return (
    <View style={styles.container}>
      <Text>ProfileGrid Icon</Text>
    </View>
  );
};

export default ProfileGridIcon;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 44,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderTopColor: 'gray',
    backgroundColor: '#FAFAFA',
  },
});
