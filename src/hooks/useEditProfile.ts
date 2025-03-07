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
    useAppSelector(state => state.editPostReducer);

  const [updateOfficialImg, setUpdateOfficialImg] = useState(officialImg);
  const [updateName, setUpdateName] = useState(name);
  const [updateUsername, setUpdateUsername] = useState(userName);
  const [updateBio, setUpdateBio] = useState(bio);
  const [updateEmail, setUpdateEmail] = useState(email);
  const [updatePhone, setUpdatePhone] = useState(phone);
  const [updateGender, setUpdateGender] = useState(gender);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  useEffect(() => {
    setUpdateOfficialImg(officialImg);
    setUpdateName(name);
    setUpdateUsername(userName);
    setUpdateBio(bio);
    setUpdateEmail(email);
    setUpdatePhone(phone);
    setUpdateGender(gender);
  }, [officialImg, name, userName, email, bio, phone, gender]);

  const imagePicker = () => {
    launchImageLibrary(
      {mediaType: 'photo', quality: 0, includeBase64: true},
      res => {
        if (res.didCancel) {
          ShowToast('info', 'Canceled', 'Image is not pick');
        } else if (res.errorCode) {
          ShowToast('info', 'Error', res.errorCode);
        } else {
          if (res.assets && res.assets[0].base64) {
            const baseUrl = `data:image/png;base64,${res.assets[0].base64}`;
            setUpdateOfficialImg(baseUrl);
          } else {
            Alert.alert('there was an error in image picker');
          }
        }
      },
    );
  };

  const handleUpdateProfile = () => {
    const updateData = {
      officialImg: updateOfficialImg,
      name: updateName,
      userName: updateUsername,
      bio: updateBio,
      email: updateEmail,
      phone: updatePhone,
      gender: updateGender,
    };
    dispatch(updateUserProfile(updateData)).then(() => {
      navigation.goBack();
    });
  };

  return {
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
  };
};

export default useEditProfile;
