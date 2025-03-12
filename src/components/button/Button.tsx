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

// const styles = StyleSheet.create({
//   logInBtn: {
//     backgroundColor: COLORS.PICTON_BLUE,
//     width: '100%',
//     height: 44,
//     borderRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 25,
//   },
//   logInBtnText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   editProfileBtn: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '90%',
//     height: 29,
//     borderWidth: 1,
//     borderColor: COLORS.TUNA,
//     borderRadius: 6,
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   editProfileText: {
//     fontWeight: '600',
//     fontSize: 13,
//   },
//   logOutBtn: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '90%',
//     height: 29,
//     backgroundColor: COLORS.POMEGRANATE,
//     borderWidth: 1,
//     borderColor: COLORS.TUNA,
//     borderRadius: 6,
//     marginTop: -5,
//     marginBottom: 20,
//   },
// });
