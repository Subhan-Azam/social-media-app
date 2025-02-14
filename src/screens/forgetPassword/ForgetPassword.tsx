import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AuthBtn from '../../components/Buttons/AuthBtn';
import useForgetPass from '../../hooks/useForgetPass';
import {ScreenProps} from '../../types/types';

const ForgetPassword: React.FC<ScreenProps<'forgetPassword'>> = ({
  navigation,
}) => {
  const {email, setEmail, loading, errorInput, handleForgetPassword} =
    useForgetPass();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backIcon}>
        <Image source={require('../../assets/images/backIcon.png')} />
      </TouchableOpacity>
      <View style={styles.box}>
        <Image source={require('../../assets/images/InstagramLogo.png')} />
        <Text style={styles.forgetPassDesc}>
          Forgot your password? write your email and we will send you a magic
          link to reset your password
        </Text>
        <View style={styles.inputsBox}>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.textInput}
            placeholder="Enter Email"
            placeholderTextColor="#00000033"
            autoCapitalize="none"
          />
        </View>
        <Text style={styles.error}>{errorInput}</Text>
        <View style={styles.authBtn}>
          <AuthBtn
            onPress={handleForgetPassword}
            loading={loading}
            title="Send Magic Link"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPassword;

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
  },
  textInput: {
    width: '100%',
    height: 44,
    borderColor: '#0000001A',
    backgroundColor: '#FAFAFA',
    color: 'black',
    borderWidth: 1,
    borderRadius: 5,
    borderBlockColor: '#0000001A',
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: -15,
    width: '100%',
    textAlign: 'left',
  },

  authBtn: {
    marginTop: -25,
    width: '100%',
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
