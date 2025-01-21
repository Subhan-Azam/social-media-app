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
import AuthBtn from '../../components/Buttons/AuthBtn';
import useHideShowPass from '../../hooks/useHideShowPass';
import useLogIn from '../../hooks/useLogIn';

type LogInProps = {
  navigation: {
    navigate: (screen: string) => void;
  };
};

const LogIn: React.FC<LogInProps> = ({navigation}) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    errorInput,
    loading,
    userLogin,
  } = useLogIn();

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
            <Image
              style={styles.instagramImg}
              source={require('../../assets/images/InstagramLogo.png')}
            />
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
                <Text onPress={togglePasswordVisibility}>
                  {showPassword ? 'Hide' : 'Show'}
                </Text>
              </View>
              {errorInput && <Text style={styles.error}>{errorInput}</Text>}

              <TouchableOpacity style={styles.forgetPassLink}>
                <Text
                  style={styles.forgotText}
                  onPress={() => navigation.navigate('forgetPassword')}>
                  Forget Password?
                </Text>
              </TouchableOpacity>
            </View>

            <AuthBtn
              onPress={userLogin}
              title={!loading ? 'Log In' : 'loading...'}
            />

            <TouchableOpacity style={styles.logInWithGoogle}>
              <Image source={require('../../assets/images/Icon.png')} />
              <Text>Login with Google</Text>
            </TouchableOpacity>
            <View style={styles.OrSec}>
              <View style={styles.line} />
              <Text>OR</Text>
              <View style={styles.line} />
            </View>
            <View style={styles.signUpSec}>
              <Text style={styles.signUpText1}>Don’t have an account? </Text>
              <Text
                style={styles.signUpText2}
                onPress={() => navigation.navigate('signUp')}>
                Sign up.
              </Text>
            </View>
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
    borderColor: 'gray',
    color: 'black',
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderRadius: 5,
    borderBlockColor: '#0000001A',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInputPass: {
    width: '90%',
    color: 'black',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: -15,
  },
  forgetPassLink: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 15,
  },
  forgotText: {
    color: '#3797EF',
    textAlign: 'right',
    fontWeight: '500',
    fontSize: 12,
  },

  logInWithGoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 30,
  },
  OrSec: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50,
    marginBottom: 30,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#00000033',
  },
  signUpSec: {
    flexDirection: 'row',
  },
  signUpText1: {
    color: 'gray',
  },
  signUpText2: {
    color: '#3797EF',
  },
});
