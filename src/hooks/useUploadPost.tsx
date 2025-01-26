// // import {useDispatch, useSelector} from 'react-redux';
// // import {
// //   setImageUri,
// //   setDescription,
// //   uploadPost,
// //   resetPostState,
// // } from '../store/slices/uploadPostSlice';

// // export const usePostUpload = () => {
// //   const dispatch = useDispatch();
// //   const {imageUri, description, loading, error, success} = useSelector(
// //     state => state.uploadPostStore,
// //   );

// //   const selectImage = (uri: string) => {
// //     dispatch(setImageUri(uri));
// //   };

// //   const updateDescription = (desc: string) => {
// //     dispatch(setDescription(desc));
// //   };

// //   const handleUpload = () => {
// //     if (!imageUri || !description) {
// //       alert('Please select an image and enter a description');
// //       return;
// //     }

// //     dispatch(uploadPost({imageUri, description}));
// //   };

// //   const resetState = () => {
// //     dispatch(resetPostState());
// //   };

// //   return {
// //     imageUri,
// //     description,
// //     loading,
// //     error,
// //     success,
// //     selectImage,
// //     updateDescription,
// //     handleUpload,
// //     resetState,
// //   };
// // };

// import {useState} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {setImageUri, uploadPost} from '../store/slices/uploadPostSlice'; // Adjust path accordingly
// import {AppDispatch} from '../store/store';
// import {Alert} from 'react-native';

// const useUploadPost = () => {
//   const [imageUri, setLocalImageUri] = useState<string | null>(null);
//   const [description, setLocalDescription] = useState<string>('');
//   const dispatch = useDispatch<AppDispatch>();

//   const {
//     imageUri: reduxImageUri,
//     description: reduxDescription,
//     loading,
//     error,
//   } = useSelector(
//     (state: any) => state.upload, // Replace with your state structure
//   );

//   // Function to pick an image
//   const pickImage = () => {
//     // Use ImagePicker logic here, then update the local state and Redux
//     // For now we assume the image URI is updated locally
//     setLocalImageUri('some_image_uri'); // Placeholder
//     dispatch(setImageUri('some_image_uri')); // Update Redux state
//   };

//   // Function to upload the post
//   const uploadData = async () => {
//     if (!imageUri || !description) {
//       Alert.alert('Please select an image and enter a description');
//       return;
//     }

//     try {
//       await dispatch(uploadPost({imageUri, description})).unwrap();
//       Alert.alert('Post uploaded successfully');
//     } catch (error) {
//       Alert.alert('Failed to upload post');
//     }
//   };

//   return {
//     imageUri: reduxImageUri || imageUri,
//     description: reduxDescription || description,
//     setImageUri: setLocalImageUri,
//     setDescription: setLocalDescription,
//     pickImage,
//     uploadData,
//     loading,
//     error,
//   };
// };

// export default useUploadPost;
