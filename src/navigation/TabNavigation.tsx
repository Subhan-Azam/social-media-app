import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import Upload from '../screens/upload/Upload';
import SelfProfile from '../screens/selfProfile/SelfProfile';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="upload"
        component={Upload}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="selfProfile"
        component={SelfProfile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
