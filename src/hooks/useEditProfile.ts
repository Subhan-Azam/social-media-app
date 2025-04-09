import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from './useRedux';

import {
  fetchUserProfile,
  updateUserProfile,
} from '../store/slices/editProfileSlice';
import {launchImageLibrary} from 'react-native-image-picker';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ShowToast} from '../components/toastMessage/ToastMessage';

const useEditProfile = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const {officialImg, name, userName, bio, email, phone, gender} =
    useAppSelector(state => state.editPostReducer) ?? {};
  const [updateOfficialImg, setUpdateOfficialImg] = useState<string>(
    officialImg ?? '',
  );
  const [updateName, setUpdateName] = useState<string>(name ?? '');
  const [updateUsername, setUpdateUsername] = useState<string>(userName ?? '');
  const [updateBio, setUpdateBio] = useState<string>(bio ?? '');
  const [updateEmail, setUpdateEmail] = useState<string>(email ?? '');
  const [updatePhone, setUpdatePhone] = useState<string>(phone ?? '');
  const [updateGender, setUpdateGender] = useState<string>(gender ?? '');

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, []);

  useEffect(() => {
    setUpdateOfficialImg(officialImg ?? '');
    setUpdateName(name ?? '');
    setUpdateUsername(userName ?? '');
    setUpdateBio(bio ?? '');
    setUpdateEmail(email ?? '');
    setUpdatePhone(phone ?? '');
    setUpdateGender(gender ?? '');
  }, [officialImg, name, userName, email, bio, phone, gender]);

  const imagePicker = () => {
    launchImageLibrary(
      {mediaType: 'photo', quality: 1, includeBase64: true},
      res => {
        if (res.didCancel) {
          ShowToast('info', 'Canceled', 'Image is not pick');
        } else if (res.errorCode) {
          ShowToast('info', 'Error', res.errorCode ?? 'Unknown error');
        } else if (res.assets?.[0]?.base64) {
          const baseUrl = `data:image/png;base64,${res.assets[0].base64}`;
          setUpdateOfficialImg(baseUrl);
        } else {
          Alert.alert('There was an error in image picker');
        }
      },
    );
  };

  const handleUpdateProfile = () => {
    const updateData = {
      officialImg: updateOfficialImg ?? '',
      name: updateName ?? '',
      userName: updateUsername ?? '',
      bio: updateBio ?? '',
      email: updateEmail ?? '',
      phone: updatePhone ?? '',
      gender: updateGender ?? '',
    };
    dispatch(updateUserProfile(updateData))?.then(() => {
      navigation?.goBack();
    });
  };

  const inputsFields = [
    {
      editable: true,
      title: 'Name',
      value: updateName ?? '',
      onChange: setUpdateName,
      placeholder: 'Name',
    },
    {
      editable: true,
      title: 'User Name',
      value: updateUsername ?? '',
      onChange: setUpdateUsername,
      placeholder: 'User Name',
    },
    {
      editable: true,
      title: 'Bio',
      value: updateBio ?? '',
      onChange: setUpdateBio,
    },
    {
      editable: false,
      title: 'Email',
      value: updateEmail ?? '',
      onChange: setUpdateEmail,
      placeholder: 'Email',
    },
    {
      editable: true,
      title: 'Phone',
      value: updatePhone ?? '',
      onChange: setUpdatePhone,
      placeholder: 'Phone',
    },
    {
      editable: true,
      title: 'Gender',
      value: updateGender ?? '',
      onChange: setUpdateGender,
      placeholder: 'Gender',
    },
  ];

  return {
    updateOfficialImg,
    updateName,
    updateUsername,
    updateBio,
    updateEmail,
    updatePhone,
    updateGender,
    handleUpdateProfile,
    imagePicker,
    inputsFields,
  };
};

export default useEditProfile;
