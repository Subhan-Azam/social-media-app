import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
import { COLORS } from '../../constants/colors';

const Loader = () => {
  return (
    <View style={styles.activityIndicator}>
      <ActivityIndicator size="large" color={COLORS.PICTON_BLUE} />
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
