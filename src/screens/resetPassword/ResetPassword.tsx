import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AuthBtn from '../../components/Buttons/AuthBtn';
import useHideShowPass from '../../hooks/useHideShowPass';

type ResetPasswordProps = {
  navigation: {
    navigate: (screen: string) => void;
    goBack: () => void;
  };
};
const ResetPassword: React.FC<ResetPasswordProps> = ({navigation}) => {
  const {showPassword: showOldPass, togglePasswordVisibility: toggleOldPass} =
    useHideShowPass(false);
  const {showPassword: showNewPass, togglePasswordVisibility: toggleNewPass} =
    useHideShowPass(false);
  const {
    showPassword: showConfirmPass,
    togglePasswordVisibility: toggleConfirmPass,
  } = useHideShowPass(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backIcon}>
        <Image source={require('../../assets/images/backIcon.png')} />
      </TouchableOpacity>
      <View style={styles.box}>
        <Image
          style={styles.instagramImg}
          source={require('../../assets/images/InstagramLogo.png')}
        />
        <View style={styles.inputsBox}>
          <View style={styles.textInput}>
            <TextInput
              secureTextEntry={!showOldPass}
              style={styles.textInputPass}
              placeholder="Enter Password"
              placeholderTextColor="#00000033"
              autoCapitalize="none"
            />

            <Text onPress={toggleOldPass}>{showOldPass ? 'Hide' : 'Show'}</Text>
          </View>
          {/* <Text style={styles.error}>invalid Name</Text> */}
          <View style={styles.textInput}>
            <TextInput
              secureTextEntry={!showNewPass}
              style={styles.textInputPass}
              placeholder="Enter Password"
              placeholderTextColor="#00000033"
              autoCapitalize="none"
            />
            <Text onPress={toggleNewPass}>{showOldPass ? 'Hide' : 'Show'}</Text>
          </View>
          {/* <Text style={styles.error}>invalid Name</Text> */}
          <View style={styles.textInput}>
            <TextInput
              secureTextEntry={!showConfirmPass}
              style={styles.textInputPass}
              placeholder="Enter Password"
              placeholderTextColor="#00000033"
              autoCapitalize="none"
            />

            <Text onPress={toggleConfirmPass}>
              {showOldPass ? 'Hide' : 'Show'}
            </Text>
          </View>
          {/* <Text style={styles.error}>invalid Name</Text> */}
        </View>

        <AuthBtn title="Reset Password" />
      </View>
    </View>
  );
};

export default ResetPassword;

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
  resetBtn: {
    backgroundColor: '#3797EF',
    width: '100%',
    height: 44,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  resetBtnText: {
    color: 'white',
    fontWeight: 600,
  },
});
