import {ActivityIndicator, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/colors';
import {styles} from './loaderStyle';

const Loader = () => {
  return (
    <View style={styles.activityIndicator}>
      <ActivityIndicator size="large" color={COLORS.PICTON_BLUE} />
    </View>
  );
};

export default Loader;
