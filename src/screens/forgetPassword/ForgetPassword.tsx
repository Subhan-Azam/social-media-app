import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ForgetPassword = () => {
  return (
    <View style={styles.container}>
      {/* <IoChevronBackOutline /> */}
      <View style={styles.box}>
        <Image
          style={styles.instagramImg}
          source={require('../../assets/images/InstagramLogo.png')}
        />
        <View style={styles.inputsBox}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Email"
            placeholderTextColor="#00000033"
          />
          <Text style={styles.error}>invalid Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Password"
            placeholderTextColor="#00000033"
            secureTextEntry
          />
          <Text style={styles.error}>invalid password</Text>

          <TouchableOpacity style={styles.forgetPassLink}>
            <Text style={styles.forgotText}>Forget Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.logInBtn}>
          <Text style={styles.logInBtnText}>Log In</Text>
        </TouchableOpacity>
        <View style={styles.logInWithGoogle}>
          <Image source={require('../../assets/images/Icon.png')} />
          <Text>Login with Google</Text>
        </View>
        <View style={styles.OrSec}>
          <View style={styles.line} />
          <Text>OR</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.signUpSec}>
          <Text style={styles.signUpText1}>Don’ t have an account?</Text>
          <Text style={styles.signUpText2}> Sign up.</Text>
        </View>
      </View>
      <View style={styles.endHrLine} />
    </View>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    height: 40,
    borderColor: 'gray',
    color: 'black',
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderRadius: 5,
    borderBlockColor: '#0000001A',
    // paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: -15,
  },
  forgetPassLink: {
    width: '100%',
    alignItems: 'flex-end',
    marginTop: 5,
    marginBottom: 10,
  },
  forgotText: {
    color: '#3797EF',
    textAlign: 'right',
    fontWeight: 500,
    fontSize: 12,
  },
  logInBtnText: {
    color: 'white',
    fontWeight: 600,
  },
  logInBtn: {
    backgroundColor: '#3797EF',
    width: '100%',
    height: 44,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
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
  endHrLine: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    height: 1,
    backgroundColor: '#00000033',
  },
});
