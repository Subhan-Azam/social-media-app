import {Text, TextInput, View} from 'react-native';
import React from 'react';
import {EditProfileProps} from '../../types/types';
import {COLORS} from '../../constants/colors';
import {styles} from './inputStyle';

const Input: React.FC<EditProfileProps> = ({
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

export default Input;
