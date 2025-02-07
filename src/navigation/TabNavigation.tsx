import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import Upload from '../screens/upload/Upload';
import SelfProfile from '../screens/selfProfile/SelfProfile';
import {Image, StyleSheet} from 'react-native';
import useEditProfile from '../hooks/useEditProfile';
import {View} from 'react-native';
const TabNavigation = () => {
  const {updateOfficialImg} = useEditProfile();
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: '#e0e0e0',
        tabBarInactiveBackgroundColor: '#fff',
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/Icon(2).png')}
              style={styles.bottomIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="upload"
        component={Upload}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/Icon(1).png')}
              style={styles.bottomIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="selfProfile"
        component={SelfProfile}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: () => (
            <View style={styles.bottomIconImgSec}>
              <Image
                source={
                  updateOfficialImg
                    ? {uri: updateOfficialImg}
                    : require('../assets/images/unknownIcon.jpg')
                }
                style={styles.bottomIconImg}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  bottomIcon: {
    width: 23,
    height: 23,
  },
  bottomIconImgSec: {
    width: 27,
    height: 27,
    borderWidth: 1,
    borderColor: 'rgba(38, 38, 38, 1)',
    borderRadius: 50,
    padding: 1,
  },
  bottomIconImg: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
});
