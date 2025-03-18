import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import SplashScreen from '../screens/splashScreen/SplashScreen';

import {RootStackParamList} from '../types/types';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {WEB_CLIENT_ID} from '@env';
import {
  AUTH_STACK_IF_USER,
  AUTH_STACK_IF_USER_NOT,
} from '../constants/constants';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [splashShow, setSplashShow] = useState<boolean>(true);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
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
          {AUTH_STACK_IF_USER?.map(({name, component}) => (
            <Stack.Screen
              key={name}
              name={name as keyof RootStackParamList}
              component={component as React.ComponentType<{}>}
              options={{headerShown: false}}
            />
          ))}
        </>
      ) : (
        <>
          {AUTH_STACK_IF_USER_NOT?.map(({name, component}) => (
            <Stack.Screen
              key={name}
              name={name}
              component={component as React.ComponentType<{}>}
              options={{headerShown: false}}
            />
          ))}
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
