import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Button from '../../components/button/Button';
import useForgetPass from '../../hooks/useForgetPass';
import {ScreenProps} from '../../types/types';
import {IMAGES} from '../../constants/images';
import {styles} from './forgetPasswordStyle';

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
          <Button
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
