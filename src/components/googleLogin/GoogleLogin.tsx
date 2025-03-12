import {Image, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import {googleLoginSlice} from '../../store/slices/authSlice';
import {EditProfileProps} from '../../types/types';
import {IMAGES} from '../../constants/images';
import {COLORS} from '../../constants/colors';
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux';
import {styles} from './googleLoginStyle';

const GoogleLogin: React.FC<EditProfileProps> = ({title}) => {
  const dispatch = useAppDispatch();
  const {loading} = useAppSelector(state => state.authReducer);

  const handleGoogleLogin = () => {
    dispatch(googleLoginSlice());
  };

  return (
    <TouchableOpacity
      style={styles.logInWithGoogle}
      onPress={handleGoogleLogin}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color={COLORS.WHITE} />
      ) : (
        <>
          <Image source={IMAGES.ICON} />
          <Text style={styles.logInWithGoogleText}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default GoogleLogin;
