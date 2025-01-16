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
import React, {useState} from 'react';

const SignUp: React.FC = () => {
  const [password, setPassword] = useState<boolean>(false);
  const [confirmPass, setConfirmPass] = useState<boolean>(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Image
            style={styles.backIcon}
            source={require('../../assets/images/backIcon.png')}
          />
          <View style={styles.box}>
            <Image
              style={styles.instagramImg}
              source={require('../../assets/images/InstagramLogo.png')}
            />
            <View style={styles.inputsBox}>
              <TextInput
                style={styles.textInput}
                placeholder="Username"
                placeholderTextColor="#00000033"
                autoCapitalize="none"
              />
              {/* <Text style={styles.error}>invalid Name</Text> */}
              <TextInput
                style={styles.textInput}
                placeholder="Enter Email"
                placeholderTextColor="#00000033"
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {/* <Text style={styles.error}>invalid Name</Text> */}
              <View style={styles.textInput}>
                <TextInput
                  secureTextEntry={!password}
                  style={styles.textInputPass}
                  placeholder="Password"
                  placeholderTextColor="#00000033"
                  autoCapitalize="none"
                />
                <Text onPress={() => setPassword(!password)}>Chg</Text>
              </View>
              {/* <Text style={styles.error}>invalid Name</Text> */}
              <View style={styles.textInput}>
                <TextInput
                  secureTextEntry={!confirmPass}
                  style={styles.textInputPass}
                  placeholder="Confirm Password"
                  placeholderTextColor="#00000033"
                  autoCapitalize="none"
                />
                <Text onPress={() => setConfirmPass(!confirmPass)}>Chg</Text>
              </View>
              {/* <Text style={styles.error}>invalid password</Text> */}
            </View>
            <TouchableOpacity style={styles.signUpBtn}>
              <Text style={styles.signUpBtnText}>Sign Up</Text>
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
              <Text style={styles.signUpText1}>
                Already have an account? Log In.
              </Text>
              <Text style={styles.signUpText2}> Log In.</Text>
            </View>
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
    left: 20,
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
    borderColor: 'gray',
    color: 'black',
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderRadius: 5,
    borderBlockColor: '#0000001A',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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

  signUpBtn: {
    backgroundColor: '#3797EF',
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
