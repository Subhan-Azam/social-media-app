// import React, {useState} from 'react';
// import {
//   Alert,
//   Image,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import {launchImageLibrary} from 'react-native-image-picker';
// import firestore from '@react-native-firebase/firestore';
// import auth from '@react-native-firebase/auth'; // To fetch the current user
// import AuthBtn from '../../components/Buttons/AuthBtn';

// const Upload = () => {
//   const [imageUri, setImageUri] = useState<string | null>(null);
//   const [description, setDescription] = useState<string>('');

//   // Function to pick an image
//   const pickImage = () => {
//     launchImageLibrary({mediaType: 'photo', quality: 1}, response => {
//       if (response.didCancel) {
//         console.log('User canceled image picker');
//       } else if (response.errorCode) {
//         console.log('ImagePicker Error: ', response.errorCode);
//       } else {
//         if (response.assets && response.assets[0].uri) {
//           setImageUri(response.assets[0].uri); // Save the image URI
//         } else {
//           console.log('No URI found');
//         }
//       }
//     });
//   };

//   // Function to upload data to Firestore
//   const uploadData = async () => {
//     if (!imageUri || !description) {
//       Alert.alert('Please select an image and enter a description');
//       return;
//     }

//     const userUID = auth().currentUser?.uid; // Get the UID of the logged-in user
//     console.log('userUID', userUID);

//     if (!userUID) {
//       Alert.alert('User is not logged in');
//       return;
//     }

//     try {
//       await firestore().collection('posts').add({
//         imageUrl: imageUri, // Save the image URL in Firestore
//         description: description, // Save the description
//         userUID: userUID, // Save the user's UID
//         createdAt: firestore.FieldValue.serverTimestamp(), // Add timestamp for ordering
//       });
//       Alert.alert('Post uploaded successfully!');
//       setImageUri(null);
//       setDescription('');
//     } catch (error) {
//       console.error('Error uploading post:', error);
//       Alert.alert('Failed to upload post');
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerText1}>cancel</Text>
//         <Text style={styles.headerText2}>Image</Text>
//       </View>

//       <View style={styles.centerUploadSec}>
//         <TouchableOpacity style={styles.uploadImgBox} onPress={pickImage}>
//           {imageUri ? (
//             <Image
//               source={{uri: imageUri}}
//               style={{height: '100%', width: '100%'}}
//             />
//           ) : (
//             <Image source={require('../../assets/images/Upload.png')} />
//           )}
//         </TouchableOpacity>
//         <View style={styles.descSec}>
//           <Text>Post Description</Text>
//           <TextInput
//             style={styles.descInput}
//             placeholder="Add post description"
//             value={description}
//             onChangeText={setDescription}
//           />
//         </View>
//         <View style={styles.AuthBtn}>
//           <AuthBtn title="Upload" onPress={uploadData} />
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default Upload;

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     flexGrow: 1,
//   },
//   header: {
//     backgroundColor: '#FAFAFA',
//     flexDirection: 'row',
//     width: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 60,
//   },
//   headerText1: {
//     fontSize: 16,
//     fontWeight: '400',
//   },
//   headerText2: {
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   centerUploadSec: {
//     marginTop: 20,
//     width: '90%',
//   },
//   uploadImgBox: {
//     height: 360,
//     width: 330,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderColor: 'black',
//     borderWidth: 2,
//     borderStyle: 'dashed',
//   },
//   descSec: {
//     justifyContent: 'center',
//     marginTop: 15,
//     gap: 5,
//   },
//   descInput: {
//     width: '100%',
//     backgroundColor: '#FAFAFA',
//     color: 'black',
//     borderWidth: 0.5,
//     borderBlockColor: '#0000001A',
//     borderRadius: 5,
//     height: 44,
//     paddingHorizontal: 10,
//   },
//   AuthBtn: {
//     marginTop: 60,
//     marginBottom: 20,
//   },
// });

import React from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
// import {useDispatch, useSelector} from 'react-redux';
import {
  setImageUri,
  setDescription,
  uploadPost,
} from '../../store/slices/uploadPostSlice'; // Adjust the path accordingly
import AuthBtn from '../../components/Buttons/AuthBtn';
import useAppSelector from '../../hooks/useAppSelector';
import useAppDispatch from '../../hooks/useAppDispatch';

const Upload = () => {
  const dispatch = useAppDispatch();
  const imageUri = useAppSelector(state => state.uploadPostStore.imageUri);
  const description = useAppSelector(
    state => state.uploadPostStore.description,
  );
  const loading = useAppSelector(state => state.uploadPostStore.loading);
  const error = useAppSelector(state => state.uploadPostStore.error);

  const pickImage = () => {
    launchImageLibrary({mediaType: 'photo', quality: 1}, response => {
      if (response.didCancel) {
        console.log('User canceled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else {
        if (response.assets && response.assets[0].uri) {
          dispatch(setImageUri(response.assets[0].uri)); // Dispatch to Redux to set image URI
        } else {
          console.log('No URI found');
        }
      }
    });
  };

  const uploadData = () => {
    if (!imageUri || !description) {
      Alert.alert('Please select an image and enter a description');
      return;
    }

    dispatch(uploadPost({imageUri, description}));
    Alert.alert('Post uploaded successfully!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText1}>cancel</Text>
        <Text style={styles.headerText2}>Image</Text>
      </View>

      <View style={styles.centerUploadSec}>
        <TouchableOpacity style={styles.uploadImgBox} onPress={pickImage}>
          {imageUri ? (
            <Image
              source={{uri: imageUri}}
              style={{height: '100%', width: '100%'}}
            />
          ) : (
            <Image source={require('../../assets/images/Upload.png')} />
          )}
        </TouchableOpacity>

        <View style={styles.descSec}>
          <Text>Post Description</Text>
          <TextInput
            style={styles.descInput}
            placeholder="Add post description"
            value={description}
            onChangeText={text => dispatch(setDescription(text))} // Dispatch to Redux to set description
          />
        </View>
        {error && <Text style={{color: 'red'}}>{error}</Text>}

        <View style={styles.AuthBtn}>
          <AuthBtn title="Upload" loading={loading} onPress={uploadData} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Upload;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  headerText1: {
    fontSize: 16,
    fontWeight: '400',
  },
  headerText2: {
    fontSize: 16,
    fontWeight: '600',
  },
  centerUploadSec: {
    marginTop: 20,
    width: '90%',
  },
  uploadImgBox: {
    height: 360,
    width: 330,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'dashed',
  },
  descSec: {
    justifyContent: 'center',
    marginTop: 15,
    gap: 5,
  },
  descInput: {
    width: '100%',
    backgroundColor: '#FAFAFA',
    color: 'black',
    borderWidth: 0.5,
    borderBlockColor: '#0000001A',
    borderRadius: 5,
    height: 44,
    paddingHorizontal: 10,
  },
  AuthBtn: {
    marginTop: 60,
    marginBottom: 20,
  },
});
