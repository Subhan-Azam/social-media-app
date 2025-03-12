import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useEditProfile from '../../hooks/useEditProfile';
import Input from '../../components/input/Input';
import AuthNavigator from '../../components/authNavigator/AuthNavigator';
import {ScreenProps} from '../../types/types';
import UserIcon from 'react-native-vector-icons/FontAwesome';
import {styles} from './editProfileStyle';

const EditProfile: React.FC<ScreenProps<'EditProfile'>> = ({navigation}) => {
  const {
    updateOfficialImg,
    updateName,
    setUpdateName,
    updateUsername,
    setUpdateUsername,
    updateBio,
    setUpdateBio,
    updateEmail,
    setUpdateEmail,
    updatePhone,
    setUpdatePhone,
    updateGender,
    setUpdateGender,
    handleUpdateProfile,
    imagePicker,
  } = useEditProfile();

  const inputsFields = [
    {
      editable: true,
      title: 'Name',
      value: updateName,
      onChange: setUpdateName,
      placeholder: 'Name',
    },
    {
      editable: true,
      title: 'User Name',
      value: updateUsername,
      onChange: setUpdateUsername,
      placeholder: 'User Name',
    },
    {editable: true, title: 'Bio', value: updateBio, onChange: setUpdateBio},
    {
      editable: false,
      title: 'Email',
      value: updateEmail,
      onChange: setUpdateEmail,
      placeholder: 'Email',
    },
    {
      editable: true,
      title: 'Phone',
      value: updatePhone,
      onChange: setUpdatePhone,
      placeholder: 'Phone',
    },
    {
      editable: true,
      title: 'Gender',
      value: updateGender,
      onChange: setUpdateGender,
      placeholder: 'Gender',
    },
  ];
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
            <UserIcon name="user-circle" size={95} color="gray" />
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
