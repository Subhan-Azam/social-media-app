import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useEditProfile from '../../hooks/useEditProfile';
import EditProfileInput from '../../components/editProfileInput/EditProfileInput';
import PageShiftAuth from '../../components/pageShiftAuth/PageShiftAuth';
import {ScreenProps} from '../../types/types';

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
    },
    {
      editable: true,
      title: 'User Name',
      value: updateUsername,
      onChange: setUpdateUsername,
    },
    {editable: true, title: 'Bio', value: updateBio, onChange: setUpdateBio},
    {
      editable: false,
      title: 'Email',
      value: updateEmail,
      onChange: setUpdateEmail,
    },
    {
      editable: true,
      title: 'Phone',
      value: updatePhone,
      onChange: setUpdatePhone,
    },
    {
      editable: true,
      title: 'Gender',
      value: updateGender,
      onChange: setUpdateGender,
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
            <Image
              source={require('../../assets/images/unknownIcon.jpg')}
              style={styles.imgChange}
            />
          )}
          <TouchableOpacity onPress={imagePicker}>
            <Text style={styles.changeName}>Change Profile Photo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
        <View style={styles.box}>
          {inputsFields.slice(0, 3).map((field, index) => (
            <EditProfileInput
              key={index}
              editable={field.editable}
              title={field.title}
              value={field.value}
              onChange={field.onChange}
            />
          ))}
        </View>

        <View style={styles.line} />
        <View style={styles.box}>
          <Text style={styles.privateInfo}>Private Information</Text>
          {inputsFields.slice(3).map((field, index) => (
            <EditProfileInput
              key={index}
              editable={field.editable}
              title={field.title}
              value={field.value}
              onChange={field.onChange}
            />
          ))}
        </View>
        <PageShiftAuth
          title1="Want to change your password? "
          title2="Reset Password."
          onPress={() => navigation.navigate('ResetPassword')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginBottom: 10,
  },
  container: {
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'rgba(166, 166, 170, 0.16)',
  },
  cancelText: {
    color: 'red',
    fontWeight: 400,
    fontSize: 16,
  },
  editText: {
    color: '#262626',
    fontWeight: 600,
    fontSize: 16,
  },
  doneText: {
    color: '#3897F0',
    fontWeight: 600,
    fontSize: 16,
  },
  imgChangeSec: {
    alignItems: 'center',
    marginVertical: 16,
  },
  imgChange: {
    height: 95,
    width: 95,
    borderRadius: 100,
  },
  line: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#3C3C434A',
    marginTop: 20,
    marginBottom: 10,
  },
  box: {
    paddingHorizontal: 20,
  },

  bioSec: {
    flexDirection: 'row',
    marginTop: 10,
  },
  bioText: {
    width: 90,
    fontSize: 15,
  },
  bio: {
    fontSize: 15,
    width: '75%',
  },
  bioName: {
    fontWeight: 600,
    color: '#05386B',
    marginLeft: 5,
  },
  changeName: {
    fontWeight: 600,
    fontSize: 13,
    color: '#3897F0',
    marginTop: 10,
  },

  privateInfo: {
    fontWeight: 600,
    fontSize: 16,
    marginTop: 10,
  },
});
