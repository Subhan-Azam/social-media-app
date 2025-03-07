import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp, NavigationProp} from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  UserProfile: {userId: string};
  EditProfile: undefined;
  ResetPassword: undefined;
  logIn: undefined;
  signUp: undefined;
  forgetPassword: undefined;
};

export type ScreenProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};

export type UserProfileRouteProp = RouteProp<RootStackParamList, 'UserProfile'>;
export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type Screens = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
  route: any;
};

export interface UserBioProps {
  officialImg?: string;
  name?: string;
  userName?: string;
  bio?: string;
}

export interface AuthBtnProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
}
export interface FetchAllPostSlice {
  id: string;
  imageUrl: string;
  description: string;
  userUID: string;
  userName: string;
  createdAt: string;
}

export interface SelfProfileProps {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
}

export interface UserProps {
  post: {
    officialImg: string;
    imageUrl: string;
    description: string;
    userName: string;
    userUID: string;
    createdAt: string;
  };
}

export interface Posts {
  uid: string;
  imageUrl: string;
  description: string;
  userName: string;
  userUID: string;
  createdAt: string;
}

export interface EditProfileProps {
  title?: string;
  value?: string;
  onChange?: (value: string) => void;
  editable?: boolean;
  placeholder?: string;
}

export interface Post {
  uid: string;
  imageUrl: string;
  description: string;
  userUID: string;
  userName: string;
  createdAt: string;
}

export interface AuthNavigatorProps {
  onPress: () => void;
  title1: string;
  title2?: string;
}

// slices
export interface AuthSliceProps {
  username: string;
  email: string;
  password: string;
  loading: boolean;
  userId: string;
  error: string | null;
}

export interface UserProfileState {
  officialImg: string;
  name: string;
  userName: string;
  email: string;
  bio: string;
  phone: string;
  gender: string;
  loading?: boolean;
  error?: string | null;
}

export interface PostSliceProps {
  id: string;
  officialImg: string;
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

// hooks
export interface UseUploadPostReturn {
  imageUri: string | null;
  description: string;
  loading: boolean;
  pickImage: () => void;
  uploadData: () => void;
  setDescription: (text: string) => void;
}

export interface UserData {
  officialImg: string;
  name: string;
  userName: string;
  bio: string;
}
