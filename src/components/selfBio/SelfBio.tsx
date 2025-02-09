import {StyleSheet, Image, View, Text, ScrollView} from 'react-native';
import React from 'react';
import useEditProfile from '../../hooks/useEditProfile';
import UserIcon from 'react-native-vector-icons/FontAwesome';
const SelfBio = () => {
  const {updateOfficialImg, updateName, updateUsername, updateBio} =
    useEditProfile();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.lockText}>jacob_w</Text>
        <View style={styles.profileImgSec}>
          {updateOfficialImg ? (
            <Image
              style={styles.profileImg}
              source={{uri: updateOfficialImg}}
            />
          ) : (
            <UserIcon name="user-circle" size={86} color="gray" />
          )}
        </View>
        <Text style={styles.officialNameText}>{updateName}</Text>

        <Text style={styles.bio}>
          <Text style={styles.bioTag}> {updateUsername} </Text>
          {updateBio}
        </Text>
      </View>
    </ScrollView>
  );
};

export default SelfBio;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  lockText: {
    fontWeight: 600,
    fontSize: 16,
    marginBottom: 5,
  },
  profileImgSec: {
    borderWidth: 2,
    borderColor: '#C7C7CC',
    width: 96,
    height: 96,
    borderRadius: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    marginVertical: 8,
  },
  profileImg: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  officialNameText: {
    fontWeight: 600,
    fontSize: 12,
  },
  bio: {
    textAlign: 'center',
    fontSize: 12,
    width: 240,
    borderColor: '#C7C7CC',
    marginBottom: 10,
  },
  bioTag: {
    color: '#05386B',
    fontWeight: 'bold',
  },
});
