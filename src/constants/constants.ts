import TabNavigation from '../navigation/TabNavigation';
import EditProfile from '../screens/editProfile/EditProfile';
import ForgetPassword from '../screens/forgetPassword/ForgetPassword';
import LogIn from '../screens/logIn/LogIn';
import ResetPassword from '../screens/resetPassword/ResetPassword';
import SignUp from '../screens/signUp/SignUp';
import UserProfile from '../screens/userProfile/UserProfile';
import {RootStackParamList} from '../types/types';

type ScreenConfig<T extends keyof RootStackParamList> = {
  name: T;
  component: Element;
};

export const AUTH_STACK_IF_USER = [
  {name: 'Home', component: TabNavigation},
  {name: 'UserProfile', component: UserProfile},
  {name: 'EditProfile', component: EditProfile},
  {name: 'ResetPassword', component: ResetPassword},
];

export const AUTH_STACK_IF_USER_NOT: ScreenConfig<keyof RootStackParamList>[] =
  [
    {name: 'logIn', component: LogIn},
    {name: 'signUp', component: SignUp},
    {name: 'forgetPassword', component: ForgetPassword},
  ];
