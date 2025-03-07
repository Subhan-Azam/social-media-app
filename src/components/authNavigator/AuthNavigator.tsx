import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AuthNavigatorProps} from '../../types/types';
import { COLORS } from '../../constants/colors';

const AuthNavigator: React.FC<AuthNavigatorProps> = ({
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

export default AuthNavigator;

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
