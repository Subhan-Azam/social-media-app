import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

type AuthBtnProps = {
  title: string;
};

const AuthBtn: React.FC<AuthBtnProps> = ({title}) => {
  return (
    <>
      <TouchableOpacity style={styles.logInBtn}>
        <Text style={styles.logInBtnText}>{title}</Text>
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
  },
  logInBtnText: {
    color: 'white',
    fontWeight: '600',
  },
});
