import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import AuthBtn from '../../components/Buttons/AuthBtn';
import useUploadPost from '../../hooks/useUploadPost';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const Upload = () => {
  const navigation = useNavigation();
  const {
    imageUri,
    description,
    loading,
    pickImage,
    uploadData,
    setDescription,
  } = useUploadPost();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text onPress={() => navigation.goBack()} style={styles.headerText1}>
          Cancel
        </Text>
        <Text style={styles.headerText2}>Image</Text>
        <Text style={styles.headerText3} />
      </View>

      <View style={styles.centerUploadSec}>
        <TouchableOpacity style={styles.uploadImgBox} onPress={pickImage}>
          {imageUri ? (
            <Image source={{uri: imageUri}} style={styles.uploadedImage} />
          ) : (
            <>
              <Icon name="cloud-upload" size={50} color="black" />
              <Text style={styles.uploadImgText}>Upload Image</Text>
            </>
          )}
        </TouchableOpacity>

        <View style={styles.descSec}>
          <Text style={styles.descText}>Post Description</Text>
          <TextInput
            style={styles.descInput}
            placeholder="Add post description"
            placeholderTextColor="#0000001A"
            value={description}
            onChangeText={setDescription}
          />
        </View>

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
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    height: 50,
  },
  headerText1: {
    fontSize: 16,
    fontWeight: '400',
  },
  headerText2: {
    fontSize: 16,
    fontWeight: '600',
  },
  headerText3: {
    width: 40,
  },
  centerUploadSec: {
    marginTop: 20,
    width: '90%',
  },
  uploadImgBox: {
    height: 360,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'dashed',
  },
  uploadImgText: {
    fontWeight: 600,
    fontSize: 14,
    marginTop: 5,
  },
  uploadedImage: {
    height: '100%',
    width: '100%',
  },
  descSec: {
    justifyContent: 'center',
    marginTop: 15,
    gap: 5,
  },
  descText: {
    fontWeight: 600,
    fontSize: 13,
    marginTop: 5,
  },
  descInput: {
    width: '100%',
    color: 'black',
    borderWidth: 1,
    borderColor: '#0000001A',
    backgroundColor: '#FAFAFA',
    borderRadius: 5,
    height: 44,
    paddingHorizontal: 10,
  },
  AuthBtn: {
    marginTop: 60,
  },
});
