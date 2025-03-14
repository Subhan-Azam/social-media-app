import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../../components/button/Button';
import useHideShowPass from '../../hooks/useHideShowPass';
import useResetPassword from '../../hooks/useResetPassword';
import {ScreenProps} from '../../types/types';
import EyeIcon from 'react-native-vector-icons/FontAwesome';
import EyeSlash from 'react-native-vector-icons/FontAwesome';
import {IMAGES} from '../../constants/images';
import {styles} from './resetPasswordStyle';
import { COLORS } from '../../constants/colors';

const ResetPassword: React.FC<ScreenProps<'ResetPassword'>> = ({
  navigation,
}) => {
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
        <Image source={IMAGES.BACKICON} />
      </TouchableOpacity>
      <View style={styles.box}>
        <Image style={styles.instagramImg} source={IMAGES.INSTAGRAMLOGO} />
        <View style={styles.inputsBox}>
          <View style={styles.textInput}>
            <TextInput
              secureTextEntry={!showOldPass}
              style={styles.textInputPass}
              placeholder="Old Password"
              placeholderTextColor={COLORS.LIGHT_GRAY}
              autoCapitalize="none"
              value={oldPassword}
              onChangeText={setOldPassword}
            />
            <TouchableOpacity onPress={toggleOldPass}>
              {showOldPass ? (
                <EyeIcon name="eye" size={21} color="gray" />
              ) : (
                <EyeSlash name="eye-slash" size={21} color="gray" />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.textInput}>
            <TextInput
              secureTextEntry={!showNewPass}
              style={styles.textInputPass}
              placeholder="New Password"
              placeholderTextColor={COLORS.LIGHT_GRAY}
              autoCapitalize="none"
              value={newPassword}
              onChangeText={setNewPassword}
            />
            <TouchableOpacity onPress={toggleNewPass}>
              {showNewPass ? (
                <EyeIcon name="eye" size={21} color="gray" />
              ) : (
                <EyeSlash name="eye-slash" size={21} color="gray" />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.textInput}>
            <TextInput
              secureTextEntry={!showConfirmPass}
              style={styles.textInputPass}
              placeholder="Confirm Password"
              placeholderTextColor={COLORS.LIGHT_GRAY}
              autoCapitalize="none"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity onPress={toggleConfirmPass}>
              {showConfirmPass ? (
                <EyeIcon name="eye" size={21} color="gray" />
              ) : (
                <EyeSlash name="eye-slash" size={21} color="gray" />
              )}
            </TouchableOpacity>
          </View>
          {error && <Text style={styles.error}>{error}</Text>}
        </View>

        <Button
          loading={loading}
          title="Reset Password"
          onPress={resetPassword}
        />
      </View>
    </ScrollView>
  );
};

export default ResetPassword;
