import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import AuthBtn from '../../components/Buttons/AuthBtn';

const ForgetPassword: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.backIcon}
        source={require('../../assets/images/backIcon.png')}
      />
      <View style={styles.box}>
        <Image source={require('../../assets/images/InstagramLogo.png')} />
        <Text style={styles.forgetPassDesc}>
          Forgot your password? write your email and we will send you a magic
          link to reset your password
        </Text>
        <View style={styles.inputsBox}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Email"
            placeholderTextColor="#00000033"
            autoCapitalize="none"
          />
          {/* <Text style={styles.error}>invalid email</Text> */}
        </View>

        <AuthBtn title="Send Magic Link" />
      </View>
    </SafeAreaView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  backIcon: {
    position: 'absolute',
    top: 30,
    left: 20,
  },
  container: {
    flex: 1,
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    padding: 20,
  },
  forgetPassDesc: {
    textAlign: 'center',
    color: '#00000066',
    marginBottom: 50,
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
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: -15,
  },
  MagicLinkBtn: {
    backgroundColor: '#3797EF',
    width: '100%',
    height: 44,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  MagicLinkBtnText: {
    color: 'white',
    fontWeight: 600,
  },
  endHrLine: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    height: 1,
    backgroundColor: '#00000033',
  },
});
