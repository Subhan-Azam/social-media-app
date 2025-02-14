import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const OrSec = () => {
  return (
    <View style={styles.OrSec}>
      <View style={styles.line} />
      <Text style={styles.orText}>OR</Text>
      <View style={styles.line} />
    </View>
  );
};

export default OrSec;

const styles = StyleSheet.create({
  OrSec: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50,
  },
  orText: {
    color: '#00000066',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#00000033',
  },
});
