import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import Button from '../../components/button/Button';
import useHideShowPass from '../../hooks/useHideShowPass';
import useSignUp from '../../hooks/useSignUp';
import AuthNavigator from '../../components/authNavigator/AuthNavigator';
import GoogleLogin from '../../components/googleLogin/GoogleLogin';
import {ScreenProps} from '../../types/types';
import EyeIcon from 'react-native-vector-icons/FontAwesome';
import EyeSlash from 'react-native-vector-icons/FontAwesome';
import Divider from '../../components/divider/Divider';
import {IMAGES} from '../../constants/images';
import {styles} from './signUpStyle';

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

            <Button onPress={createUser} title="Sign Up" loading={loading} />

            <GoogleLogin title="Sign Up with google" />

            <Divider />

            <AuthNavigator
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
