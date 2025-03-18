import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useEditProfile from '../../hooks/useEditProfile';
import Input from '../../components/input/Input';
import AuthNavigator from '../../components/authNavigator/AuthNavigator';
import {ScreenProps} from '../../types/types';
import UserIcon from 'react-native-vector-icons/FontAwesome';
import {styles} from './editProfileStyle';
import {COLORS} from '../../constants/colors';

const EditProfile: React.FC<ScreenProps<'EditProfile'>> = ({navigation}) => {
  const {updateOfficialImg, handleUpdateProfile, imagePicker, inputsFields} =
    useEditProfile();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text onPress={() => navigation.goBack()} style={styles.cancelText}>
            Cancel
          </Text>
          <Text style={styles.editText}>Edit Profile</Text>
          <TouchableOpacity onPress={handleUpdateProfile}>
            <Text style={styles.doneText}>Done</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imgChangeSec}>
          {updateOfficialImg ? (
            <Image source={{uri: updateOfficialImg}} style={styles.imgChange} />
          ) : (
            <UserIcon name="user-circle" size={95} color={COLORS.GRAY} />
          )}
          <TouchableOpacity onPress={imagePicker}>
            <Text style={styles.changeName}>Change Profile Photo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
        <View style={styles.box}>
          {inputsFields.slice(0, 3)?.map((field, index) => (
            <Input
              key={index}
              editable={field.editable}
              title={field.title}
              value={field.value}
              onChange={field.onChange}
              placeholder={field.placeholder}
            />
          ))}
        </View>

        <View style={styles.line} />
        <View style={styles.box}>
          <Text style={styles.privateInfo}>Private Information</Text>
          {inputsFields.slice(3)?.map((field, index) => (
            <Input
              key={index}
              editable={field.editable}
              title={field.title}
              value={field.value}
              onChange={field.onChange}
              placeholder={field.placeholder}
            />
          ))}
        </View>
        <AuthNavigator
          title1="Want to change your password? "
          title2="Reset Password."
          onPress={() => navigation.navigate('ResetPassword')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;
