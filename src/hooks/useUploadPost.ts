import {useEffect} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {
  setImageUri,
  setDescription,
  uploadPost,
} from '../store/slices/uploadPostSlice';
import {UseUploadPostReturn} from '../types/types';
import {useAppDispatch, useAppSelector} from './useRedux';
import {ShowToast} from '../components/toastMessage/ToastMessage';

const useUploadPost = (): UseUploadPostReturn => {
  const dispatch = useAppDispatch();
  const {imageUri, description, loading, error} = useAppSelector(
    state => state.uploadPostReducer,
  );

  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
        includeBase64: true,
      },
      response => {
        if (response?.didCancel) {
          ShowToast('info', 'Canceled', 'Image picker was canceled.');
        } else if (response?.errorCode) {
          ShowToast('error', 'Error', 'Failed to pick an image.');
        } else if (response?.assets?.[0]?.base64) {
          dispatch(
            setImageUri(`data:image/jpeg;base64,${response.assets[0].base64}`),
          );
        } else {
          ShowToast('error', 'Error', 'No valid image found.');
        }
      },
    );
  };

  const uploadData = () => {
    if (!imageUri || !description.trim()) {
      ShowToast(
        'error',
        'Incomplete Data',
        'Please select an image and enter a description.',
      );

      return;
    }

    dispatch(uploadPost({imageUri, description}))?.then(() => {
      ShowToast('success', 'Success', 'Post uploaded successfully!');
      dispatch(setImageUri(null));
      dispatch(setDescription(''));
    });
  };

  useEffect(() => {
    if (error) {
      ShowToast('error', 'Upload Error', error);
    }
  }, [error]);

  return {
    imageUri,
    description,
    loading,
    pickImage,
    uploadData,
    setDescription: (text: string) => dispatch(setDescription(text)),
  };
};

export default useUploadPost;
