import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {AuthBtnProps} from '../../types/types';
import { COLORS } from '../../constants/colors';

const AuthBtn: React.FC<AuthBtnProps> = ({title, onPress, loading = false}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.logInBtn}>
        {loading ? (
          <ActivityIndicator color={COLORS.WHITE} />
        ) : (
          <Text style={styles.logInBtnText}>{title}</Text>
        )}
      </TouchableOpacity>
    </>
  );
};

export default AuthBtn;

const styles = StyleSheet.create({
  logInBtn: {
    backgroundColor: COLORS.PICTON_BLUE,
    width: '100%',
    height: 44,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  logInBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
