import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AuthBtn from '../../components/Buttons/AuthBtn';
import useHideShowPass from '../../hooks/useHideShowPass';
import useResetPassword from '../../hooks/useResetPassword';
import {Props} from '../../types/types';


const ResetPassword: React.FC<Props> = ({navigation}) => {
  const {showPassword: showOldPass, togglePasswordVisibility: toggleOldPass} =
    useHideShowPass();
  const {showPassword: showNewPass, togglePasswordVisibility: toggleNewPass} =
    useHideShowPass();
  const {
    showPassword: showConfirmPass,
    togglePasswordVisibility: toggleConfirmPass,
  } = useHideShowPass();

  const {
    oldPassword,
    setOldPassword,
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    loading,
    error,
    resetPassword,
  } = useResetPassword();

  return (
    <ScrollView style={styles.container}>
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
              placeholder="Old Password"
              placeholderTextColor="#00000033"
              autoCapitalize="none"
              value={oldPassword}
              onChangeText={setOldPassword}
            />
            <Text onPress={toggleOldPass}>{showOldPass ? 'Hide' : 'Show'}</Text>
          </View>
          <View style={styles.textInput}>
            <TextInput
              secureTextEntry={!showNewPass}
              style={styles.textInputPass}
              placeholder="New Password"
              placeholderTextColor="#00000033"
              autoCapitalize="none"
              value={newPassword}
              onChangeText={setNewPassword}
            />
            <Text onPress={toggleNewPass}>{showNewPass ? 'Hide' : 'Show'}</Text>
          </View>
          <View style={styles.textInput}>
            <TextInput
              secureTextEntry={!showConfirmPass}
              style={styles.textInputPass}
              placeholder="Confirm Password"
              placeholderTextColor="#00000033"
              autoCapitalize="none"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <Text onPress={toggleConfirmPass}>
              {showConfirmPass ? 'Hide' : 'Show'}
            </Text>
          </View>
          {error && <Text style={styles.error}>{error}</Text>}
        </View>

        <AuthBtn
          loading={loading}
          title="Reset Password"
          onPress={resetPassword}
        />
      </View>
    </ScrollView>
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
    marginTop: 120,
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
});
