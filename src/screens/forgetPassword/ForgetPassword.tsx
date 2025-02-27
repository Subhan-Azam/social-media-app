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
import {IMAGES} from '../../constants/images';
import {COLORS} from '../../constants/colors';

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
        <Image source={IMAGES.BACKICON} />
      </TouchableOpacity>
      <View style={styles.box}>
        <Image source={IMAGES.INSTAGRAMLOGO} />
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
    color: COLORS.BLACK,
    marginBottom: 50,
  },
  inputsBox: {
    width: '100%',
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
    backgroundColor: COLORS.PICTON_BLUE,
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
    backgroundColor: COLORS.BLACK_SEC,
  },
});
