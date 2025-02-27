import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import AuthBtn from '../../components/buttons/AuthBtn';
import useHideShowPass from '../../hooks/useHideShowPass';
import useSignUp from '../../hooks/useSignUp';
import PageShiftAuth from '../../components/pageShiftAuth/PageShiftAuth';
import GoogleLogin from '../../components/googleLogin/GoogleLogin';
import {ScreenProps} from '../../types/types';
import EyeIcon from 'react-native-vector-icons/FontAwesome';
import EyeSlash from 'react-native-vector-icons/FontAwesome';
import OrSec from '../../components/orSec/OrSec';
import {IMAGES} from '../../constants/images';
import {COLORS} from '../../constants/colors';

const SignUp: React.FC<ScreenProps<'signUp'>> = ({navigation}) => {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    loading,
    errorInput,
    createUser,
  } = useSignUp();

  const {
    showPassword: showPassword,
    togglePasswordVisibility: toggleShowPassword,
  } = useHideShowPass();
  const {
    showPassword: confirmShowPass,
    togglePasswordVisibility: toggleConfirmShowPass,
  } = useHideShowPass();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => navigation.goBack()}>
            <Image source={IMAGES.BACKICON} />
          </TouchableOpacity>
          <View style={styles.box}>
            <Image style={styles.instagramImg} source={IMAGES.INSTAGRAMLOGO} />
            <View style={styles.inputsBox}>
              <TextInput
                value={name}
                onChangeText={setName}
                style={styles.textInput}
                placeholder="Username"
                placeholderTextColor="#00000033"
                autoCapitalize="none"
              />
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
                  secureTextEntry={!showPassword}
                  style={styles.textInputPass}
                  placeholder="Password"
                  placeholderTextColor="#00000033"
                  autoCapitalize="none"
                />
                <TouchableOpacity onPress={toggleShowPassword}>
                  {showPassword ? (
                    <EyeIcon name="eye" size={21} color="gray" />
                  ) : (
                    <EyeSlash name="eye-slash" size={21} color="gray" />
                  )}
                </TouchableOpacity>
              </View>
              <View style={styles.textInput}>
                <TextInput
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!confirmShowPass}
                  style={styles.textInputPass}
                  placeholder="Confirm Password"
                  placeholderTextColor="#00000033"
                  autoCapitalize="none"
                />
                <TouchableOpacity onPress={toggleConfirmShowPass}>
                  {confirmShowPass ? (
                    <EyeIcon name="eye" size={21} color="gray" />
                  ) : (
                    <EyeSlash name="eye-slash" size={21} color="gray" />
                  )}
                </TouchableOpacity>
              </View>
              {errorInput && <Text style={styles.error}>{errorInput}</Text>}
            </View>

            <AuthBtn onPress={createUser} title="Sign Up" loading={loading} />

            <GoogleLogin title="Sign Up with google" />

            <OrSec />

            <PageShiftAuth
              title1="Already have an account? "
              title2="Log In."
              onPress={() => navigation.navigate('logIn')}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  backIcon: {
    position: 'absolute',
    top: 30,
    left: 17,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    alignItems: 'center',
    justifyContent: 'space-between',
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

  signUpBtn: {
    backgroundColor: COLORS.PICTON_BLUE,
    width: '100%',
    height: 44,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  signUpBtnText: {
    color: 'white',
    fontWeight: 600,
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
