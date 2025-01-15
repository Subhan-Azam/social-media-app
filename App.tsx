import {View, StyleSheet} from 'react-native';
import React from 'react';
// import SplashScreen from './src/screens/splashScreen/SplashScreen';
import LogIn from './src/screens/logIn/LogIn';
// import SignUp from './src/screens/signUp/SignUp';
// import ForgetPassword from './src/screens/forgetPassword/ForgetPassword';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <SplashScreen /> */}
      <LogIn />
      {/* <SignUp /> */}
      {/* <ForgetPassword /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
