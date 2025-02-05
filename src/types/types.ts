// src/types/Post.ts
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

export interface Post {
  id: string;
  imageUrl: string;
  description: string;
  userName: string;
  userUID: string;
  createdAt: string;
}

export interface AuthSliceProps {
  username: string;
  email: string;
  password: string;
  loading: boolean;
  userId: string;
  error: string | null;
}

// export interface EditProfileProps {
//   officialImg: string;
//   name: string;
//   userName: string;
//   email: string;
//   bio: string;
//   phone: string;
//   gender: string;
//   loading: boolean;
//   error: string | null;
// }

export interface FetchAllPostSlice {
  id: string;
  imageUrl: string;
  description: string;
  userUID: string;
  userName: string;
  createdAt: string;
}
export interface UploadPostSlice {
  imageUri: string;
  description: string;
  loading: boolean;
  error: string | null;
  success: boolean;
}
export interface Props {
  navigation: {
    navigate: (screen: string) => void;
    goBack: () => void;
  };
}

export interface UserProps {
  post: {
    imageUrl: string;
    description: string;
    userName: string;
    userUID: string;
    createdAt: string;
  };
}

export interface EditProfileProps {
  title?: string;
  value?: string;
  onChange?: (value: string) => void;
  editable?: boolean;
}

export interface AuthBtnProps {
  title: string;
  onPress: () => void;
  loading: boolean;
}

export interface PageShiftAuthProps {
  onPress: () => void;
  title1: string;
  title2?: string;
}
