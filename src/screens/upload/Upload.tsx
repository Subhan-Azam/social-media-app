import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import AuthBtn from '../../components/Buttons/AuthBtn';

const Upload = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText1}>cancel</Text>
        <Text style={styles.headerText2}>Image</Text>
      </View>

      <View style={styles.centerUploadSec}>
        <View style={styles.uploadImgBox}>
          <Image source={require('../../assets/images/Upload.png')} />
        </View>
        <View style={styles.descSec}>
          <Text>Post Description</Text>
          <TextInput
            style={styles.descInput}
            placeholder="Add post description"
          />
        </View>
        <View style={styles.AuthBtn}>
          <AuthBtn title="Upload" />
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
