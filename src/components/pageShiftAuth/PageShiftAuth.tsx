import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PageShiftAuthProps} from '../../types/types';
import { COLORS } from '../../constants/colors';

const PageShiftAuth: React.FC<PageShiftAuthProps> = ({
  onPress,
  title1,
  title2,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.signUpSec}>
        <Text style={styles.signUpText1}>{title1}</Text>
        <Text style={styles.signUpText2} onPress={onPress}>
          {title2}
        </Text>
      </View>
    </View>
  );
};

export default PageShiftAuth;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 40,
  },
  signUpSec: {
    flexDirection: 'row',
  },
  signUpText1: {
    color: 'gray',
  },
  signUpText2: {
    color: COLORS.PICTON_BLUE,
  },
});
