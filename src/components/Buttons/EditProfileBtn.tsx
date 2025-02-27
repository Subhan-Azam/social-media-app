import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {editProps} from '../../types/types';
import { COLORS } from '../../constants/colors';

const EditProfileBtn: React.FC<editProps> = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.box}>
        <Text style={styles.editProfileText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfileBtn;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 29,
    borderWidth: 1,
    borderColor: COLORS.TUNA,
    borderRadius: 6,
  },
  editProfileText: {
    fontWeight: 600,
    fontSize: 13,
  },
});
