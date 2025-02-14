

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import LogIn from '../screens/logIn/LogIn';
import SignUp from '../screens/signUp/SignUp';
import ForgetPassword from '../screens/forgetPassword/ForgetPassword';
import SplashScreen from '../screens/splashScreen/SplashScreen';
import ResetPassword from '../screens/resetPassword/ResetPassword';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import TabNavigation from './TabNavigation';
import EditProfile from '../screens/editProfile/EditProfile';
import UserProfile from '../screens/userProfile/UserProfile';
import {RootStackParamList} from '../types/types';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [splashShow, setSplashShow] = useState<boolean>(true);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '793741851762-hpcds8m113sc9sqhdb18a8vdqcbu7nve.apps.googleusercontent.com',
    });
  }, []);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(
      (authUser: FirebaseAuthTypes.User | null) => {
        setUser(authUser);
        setInitializing(false);
      },
    );

    return subscriber;
  }, []);

  useEffect(() => {
    const timeoutHandler = setTimeout(() => {
      setSplashShow(false);
    }, 1500);
    return () => clearTimeout(timeoutHandler);
  }, [initializing]);

  if (initializing || splashShow) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen
            name="Home"
            component={TabNavigation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="UserProfile"
            component={UserProfile}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ResetPassword"
            component={ResetPassword}
            options={{headerShown: false}}
          />
        </>
      ) : (
        <>
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
        </>
      )}
    </Stack.Navigator>
  );
};

const AuthNavigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default AuthNavigation;
