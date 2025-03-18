import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import Upload from '../screens/upload/Upload';
import SelfProfile from '../screens/selfProfile/SelfProfile';
import {Image, StyleSheet} from 'react-native';
import useEditProfile from '../hooks/useEditProfile';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import UserIcon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../constants/colors';

const TabNavigation = () => {
  const {updateOfficialImg} = useEditProfile();
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <Icon2
              name="home-outline"
              size={24}
              color={focused ? COLORS.PICTON_BLUE : COLORS.DARK}
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
          tabBarIcon: ({focused}) => (
            <Icon
              name="plus-square-o"
              size={25}
              color={focused ? COLORS.PICTON_BLUE : COLORS.DARK}
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
          tabBarIcon: ({focused}) => (
            <View
              style={[styles.bottomIconImgSec, focused && styles.activeBorder]}>
              {updateOfficialImg ? (
                <Image
                  source={{uri: updateOfficialImg}}
                  style={styles.bottomIconImg}
                />
              ) : (
                <UserIcon name="user-circle" size={21} color={COLORS.GRAY} />
              )}
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
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.GRAY,
    borderRadius: 50,
    padding: 1,
  },
  activeBorder: {
    borderColor: COLORS.PICTON_BLUE,
    borderWidth: 1.5,
  },
  bottomIconImg: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
});
