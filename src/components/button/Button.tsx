import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {AuthBtnProps} from '../../types/types';
import {COLORS} from '../../constants/colors';
import {styles} from './buttonStyle';

const Button: React.FC<AuthBtnProps> = ({title, onPress, loading = false}) => {
  const isEditProfile = title === 'Edit Profile';
  const isLogOut = title === 'Log Out';

  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        isEditProfile
          ? styles.editProfileBtn
          : isLogOut
          ? styles.logOutBtn
          : styles.logInBtn
      }>
      {loading ? (
        <ActivityIndicator color={COLORS.WHITE} />
      ) : (
        <Text
          style={isEditProfile ? styles.editProfileText : styles.logInBtnText}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
