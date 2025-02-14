import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {AuthBtnProps} from '../../types/types';

const AuthBtn: React.FC<AuthBtnProps> = ({title, onPress, loading = false}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.logInBtn}>
        {loading ? (
          <ActivityIndicator color="#ffffff" />
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
    backgroundColor: '#3797EF',
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
