// src/types/Post.ts
export interface Post {
  id: string;
  imageUrl: string;
  description: string;
  userName: string;
  userUID: string;
  createdAt: string;
}


import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  UserProfile: {userId: string};
  EditProfile: undefined;
  ResetPassword: undefined;
  logIn: undefined;
  signUp: undefined;
  forgetPassword: undefined;
};

export type UserProfileRouteProp = RouteProp<RootStackParamList, 'UserProfile'>;
export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;
