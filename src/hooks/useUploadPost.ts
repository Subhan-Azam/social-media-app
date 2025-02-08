// import {useEffect} from 'react';
// import {launchImageLibrary} from 'react-native-image-picker';
// import Toast from 'react-native-toast-message';
// import {
//   setImageUri,
//   setDescription,
//   uploadPost,
// } from '../store/slices/uploadPostSlice';
// import useAppSelector from './useAppSelector';
// import useAppDispatch from './useAppDispatch';
// import {UseUploadPostReturn} from '../types/types';

// const useUploadPost = (): UseUploadPostReturn => {
//   const dispatch = useAppDispatch();
//   const {imageUri, description, loading, error} = useAppSelector(
//     state => state.uploadPostStore,
//   );

//   const pickImage = () => {
//     launchImageLibrary({mediaType: 'photo', quality: 1}, response => {
//       if (response.didCancel) {
//         Toast.show({
//           type: 'info',
//           text1: 'Canceled',
//           text2: 'Image picker was canceled.',
//         });
//       } else if (response.errorCode) {
//         Toast.show({
//           type: 'error',
//           text1: 'Error',
//           text2: 'Failed to pick an image.',
//         });
//       } else {
//         if (response.assets && response.assets[0].uri) {
//           console.log('response.assets[0].uri====', response.assets[0].uri);

//           dispatch(setImageUri(response.assets[0].uri));
//         } else {
//           Toast.show({
//             type: 'error',
//             text1: 'Error',
//             text2: 'No valid image found.',
//           });
//         }
//       }
//     });
//   };

//   const uploadData = () => {
//     if (!imageUri || !description) {
//       Toast.show({
//         type: 'error',
//         text1: 'Incomplete Data',
//         text2: 'Please select an image and enter a description.',
//       });
//       return;
//     }

//     dispatch(uploadPost({imageUri, description})).then(() => {
//       Toast.show({
//         type: 'success',
//         text1: 'Success',
//         text2: 'Post uploaded successfully!',
//       });
//       dispatch(setImageUri(null));
//       dispatch(setDescription(''));
//     });
//   };

//   useEffect(() => {
//     if (error) {
//       Toast.show({
//         type: 'error',
//         text1: 'Upload Error',
//         text2: error,
//       });
//     }
//   }, [error]);

//   return {
//     imageUri,
//     description,
//     loading,
//     pickImage,
//     uploadData,
//     setDescription: (text: string) => dispatch(setDescription(text)),
//   };
// };

// export default useUploadPost;

import {useEffect} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import Toast from 'react-native-toast-message';
import {
  setImageUri,
  setDescription,
  uploadPost,
} from '../store/slices/uploadPostSlice';
import useAppSelector from './useAppSelector';
import useAppDispatch from './useAppDispatch';
import {UseUploadPostReturn} from '../types/types';

const useUploadPost = (): UseUploadPostReturn => {
  const dispatch = useAppDispatch();
  const {imageUri, description, loading, error} = useAppSelector(
    state => state.uploadPostStore,
  );

  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
        includeBase64: true,
      },
      response => {
        if (response.didCancel) {
          Toast.show({
            type: 'info',
            text1: 'Canceled',
            text2: 'Image picker was canceled.',
          });
        } else if (response.errorCode) {
          Toast.show({
            type: 'error',
            text1: 'Error',
            text2: 'Failed to pick an image.',
          });
        } else {
          if (response.assets && response.assets[0].base64) {
            dispatch(
              setImageUri(
                `data:image/jpeg;base64,${response.assets[0].base64}`,
              ),
            );
          } else {
            Toast.show({
              type: 'error',
              text1: 'Error',
              text2: 'No valid image found.',
            });
          }
        }
      },
    );
  };

  const uploadData = () => {
    if (!imageUri || !description) {
      Toast.show({
        type: 'error',
        text1: 'Incomplete Data',
        text2: 'Please select an image and enter a description.',
      });
      return;
    }

    dispatch(uploadPost({imageUri, description})).then(() => {
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Post uploaded successfully!',
      });
      dispatch(setImageUri(null));
      dispatch(setDescription(''));
    });
  };

  useEffect(() => {
    if (error) {
      Toast.show({
        type: 'error',
        text1: 'Upload Error',
        text2: error,
      });
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
