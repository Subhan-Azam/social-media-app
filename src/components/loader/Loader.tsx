import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';

const Loader = () => {
  return (
    <View style={styles.activityIndicator}>
      <ActivityIndicator size="large" color="#3797EF" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 10,
  },
});
