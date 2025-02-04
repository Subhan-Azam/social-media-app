// import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
// import React from 'react';

// interface googleLoginProps {
//   title: string;
// }

// const GoogleLogin: React.FC<googleLoginProps> = ({title}) => {
//   return (
//     <TouchableOpacity style={styles.logInWithGoogle}>
//       <Image source={require('../../assets/images/Icon.png')} />
//       <Text>{title}</Text>
//     </TouchableOpacity>
//   );
// };

// export default GoogleLogin;

// const styles = StyleSheet.create({
//   logInWithGoogle: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10,
//     paddingVertical: 30,
//   },
// });

import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {googleLoginSlice} from '../../store/slices/authSlice';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';

interface GoogleLoginProps {
  title: string;
}

const GoogleLogin: React.FC<GoogleLoginProps> = ({title}) => {
  const dispatch = useAppDispatch();
  const {loading} = useAppSelector(state => state.authStore);

  const handleGoogleLogin = () => {
    dispatch(googleLoginSlice());
    console.log('google working');
  };

  return (
    <TouchableOpacity
      style={styles.logInWithGoogle}
      onPress={handleGoogleLogin}
      disabled={loading}>
      {/* Disable button while loading */}
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <>
          <Image source={require('../../assets/images/Icon.png')} />
          <Text style={styles.text}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default GoogleLogin;

const styles = StyleSheet.create({
  logInWithGoogle: {
    borderRightColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 30,
    backgroundColor: '#DB4437',
    borderRadius: 5,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
