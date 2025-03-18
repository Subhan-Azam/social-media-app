import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Button from '../../components/button/Button';
import useUploadPost from '../../hooks/useUploadPost';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {styles} from './uploadStyle';
import {COLORS} from '../../constants/colors';

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
              <Icon name="cloud-upload" size={50} color={COLORS.DARK} />
              <Text style={styles.uploadImgText}>Upload Image</Text>
            </>
          )}
        </TouchableOpacity>

        <View style={styles.descSec}>
          <Text style={styles.descText}>Post Description</Text>
          <TextInput
            style={styles.descInput}
            placeholder="Add post description"
            placeholderTextColor={COLORS.LIGHT_GRAY}
            value={description}
            onChangeText={setDescription}
          />
        </View>

        <View style={styles.AuthBtn}>
          <Button title="Upload" loading={loading} onPress={uploadData} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Upload;
