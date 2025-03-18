import {Image, View, Text, ScrollView} from 'react-native';
import React from 'react';
import useEditProfile from '../../hooks/useEditProfile';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './selfBioStyle';
import {COLORS} from '../../constants/colors';

const SelfBio = () => {
  const {updateOfficialImg, updateName, updateUsername, updateBio} =
    useEditProfile();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.lockSec}>
          {updateUsername && (
            <>
              <Icon name="lock" size={15} />
              <Text style={styles.lockText}>{updateUsername}</Text>
            </>
          )}
        </View>

        <View style={styles.profileImgSec}>
          {updateOfficialImg ? (
            <Image
              style={styles.profileImg}
              source={{uri: updateOfficialImg}}
            />
          ) : (
            <Icon name="user-circle" size={86} color={COLORS.GRAY} />
          )}
        </View>
        <Text style={styles.officialNameText}>{updateName}</Text>

        <Text style={styles.bio}>{updateBio}</Text>
      </View>
    </ScrollView>
  );
};

export default SelfBio;
