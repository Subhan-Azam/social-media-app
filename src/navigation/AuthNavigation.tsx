import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogIn from '../screens/logIn/LogIn';
import SignUp from '../screens/signUp/SignUp';
import ForgetPassword from '../screens/forgetPassword/ForgetPassword';
import SplashScreen from '../screens/splashScreen/SplashScreen';
import ResetPassword from '../screens/resetPassword/ResetPassword';

const AuthNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="logIn"
          component={LogIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="signUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="forgetPassword"
          component={ForgetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;
