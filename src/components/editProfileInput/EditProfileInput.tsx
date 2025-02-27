import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {EditProfileProps} from '../../types/types';
import {COLORS} from '../../constants/colors';

const EditProfileInput: React.FC<EditProfileProps> = ({
  title,
  value,
  onChange,
  editable,
  placeholder,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.editName}>{title}</Text>
      <TextInput
        value={value}
        editable={editable}
        onChangeText={onChange}
        style={styles.editInput}
        placeholder={placeholder}
        placeholderTextColor={COLORS.TUNA}
      />
    </View>
  );
};

export default EditProfileInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  editName: {
    width: 90,
  },
  editInput: {
    borderBottomWidth: 0.3,
    borderColor: COLORS.TUNA,
    width: '75%',
    color: 'black',
  },
});
