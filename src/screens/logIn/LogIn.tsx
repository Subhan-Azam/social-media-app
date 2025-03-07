import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React from 'react';
import Button from '../../components/button/Button';
import useHideShowPass from '../../hooks/useHideShowPass';
import useLogIn from '../../hooks/useLogIn';
import AuthNavigator from '../../components/authNavigator/AuthNavigator';
import GoogleLogin from '../../components/googleLogin/GoogleLogin';
import {ScreenProps} from '../../types/types';
import EyeIcon from 'react-native-vector-icons/FontAwesome';
import EyeSlash from 'react-native-vector-icons/FontAwesome';
import Divider from '../../components/divider/Divider';
import {IMAGES} from '../../constants/images';
import {COLORS} from '../../constants/colors';

const LogIn: React.FC<ScreenProps<'logIn'>> = ({navigation}) => {
  const {email, setEmail, password, setPassword, error, loading, logInUser} =
    useLogIn();

  const {showPassword, togglePasswordVisibility} = useHideShowPass();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          keyboardShouldPersistTaps="handled">
          <View style={styles.box}>
            <Image style={styles.instagramImg} source={IMAGES.INSTAGRAMLOGO} />
            <View style={styles.inputsBox}>
              <TextInput
                value={email}
                onChangeText={setEmail}
                style={styles.textInput}
                placeholder="Enter Email"
                placeholderTextColor="#00000033"
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <View style={styles.textInput}>
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  style={styles.textInputPass}
                  placeholder="Enter Password"
                  placeholderTextColor="#00000033"
                  autoCapitalize="none"
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={togglePasswordVisibility}>
                  {showPassword ? (
                    <EyeIcon name="eye" size={21} color="gray" />
                  ) : (
                    <EyeSlash name="eye-slash" size={21} color="gray" />
                  )}
                </TouchableOpacity>
              </View>
              {error && <Text style={styles.error}>{error}</Text>}

              <TouchableOpacity style={styles.forgetPassLink}>
                <Text
                  style={styles.forgotText}
                  onPress={() => navigation.navigate('forgetPassword')}>
                  Forget Password?
                </Text>
              </TouchableOpacity>
            </View>

            <Button onPress={logInUser} title="Log In" loading={loading} />

            <GoogleLogin title="Login with google" />

            <Divider />
            <AuthNavigator
              title1="Don’t have an account? "
              title2="Sign up."
              onPress={() => navigation.navigate('signUp')}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    padding: 20,
  },
  instagramImg: {
    marginBottom: 30,
  },
  inputsBox: {
    width: '100%',
    gap: 15,
  },
  textInput: {
    width: '100%',
    height: 44,
    borderColor: COLORS.BORDER_COLOR,
    backgroundColor: COLORS.ALABASTER,
    color: 'black',
    borderWidth: 1,
    borderRadius: 5,
    borderBlockColor: COLORS.BORDER_COLOR,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInputPass: {
    width: '90%',
    color: 'black',
  },
  changeIcon: {
    height: 25,
    width: 25,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: -15,
  },
  forgetPassLink: {
    width: '100%',
    alignItems: 'flex-end',
  },
  forgotText: {
    color: COLORS.PICTON_BLUE,
    textAlign: 'right',
    fontWeight: '500',
    fontSize: 12,
  },

  signUpSec: {
    flexDirection: 'row',
  },
  signUpText1: {
    color: 'gray',
  },
  signUpText2: {
    color: COLORS.PICTON_BLUE,
  },
});
