import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './dividerStyle';

const Divider = () => {
  return (
    <View style={styles.Divider}>
      <View style={styles.line} />
      <Text style={styles.orText}>OR</Text>
      <View style={styles.line} />
    </View>
  );
};

export default Divider;
