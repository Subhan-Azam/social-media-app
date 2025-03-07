import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { COLORS } from '../../constants/colors';

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

const styles = StyleSheet.create({
  Divider: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50,
  },
  orText: {
    color: COLORS.BLACK,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.BLACK_SEC,
  },
});
