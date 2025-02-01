import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

interface EditProfileInputProps {
  title: string;
  value: string;
  onChange: (value: string) => void;
}
const EditProfileInput: React.FC<EditProfileInputProps> = ({
  title,
  value,
  onChange,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.editName}>{title}</Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        style={styles.editInput}
        placeholder="Name"
        placeholderTextColor={'#3C3C434D'}
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
    borderColor: '#3C3C434A',
    width: '75%',
    color: 'black',
  },
});
