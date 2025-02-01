import {useEffect, useState} from 'react';
import useAppDispatch from './useAppDispatch';
import useAppSelector from './useAppSelector';
import {
  fetchUserProfile,
  updateUserProfile,
} from '../store/slices/editProfileSlice';
import {launchImageLibrary} from 'react-native-image-picker';
import Toast from 'react-native-toast-message';
import {Alert} from 'react-native';

const useEditProfile = () => {
  const dispatch = useAppDispatch();
  const {
    officialImg,
    name,
    userName,
    bio,
    email,
    phone,
    gender,
    // loading,
    // error,
  } = useAppSelector(state => state.editPostStore);

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
    launchImageLibrary({mediaType: 'photo', quality: 1}, res => {
      if (res.didCancel) {
        Toast.show({
          type: 'info',
          text1: 'Canceled',
          text2: 'Image is not pick.',
        });
      } else if (res.errorCode) {
        Toast.show({
          type: 'info',
          text1: 'Error',
          text2: res.errorCode,
        });
      } else {
        if (res.assets && res.assets[0].uri) {
          setUpdateOfficialImg(res.assets[0].uri);
        } else {
          Alert.alert('there was an error in image picker');
        }
      }
    });
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
    dispatch(updateUserProfile(updateData));
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
