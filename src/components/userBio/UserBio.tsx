import {StyleSheet, Image, View, Text, ScrollView} from 'react-native';
import React from 'react';
import {UserBioProps} from '../../types/types';

const UserBio: React.FC<UserBioProps> = ({
  officialImg,
  name,
  userName,
  bio,
}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.lockText}>jacob_w</Text>
        <View style={styles.profileImgSec}>
          <Image style={styles.profileImg} source={{uri: officialImg}} />
        </View>
        <Text style={styles.officialNameText}>{name}</Text>

        <Text style={styles.bio}>
          <Text style={styles.bioTag}> @{userName} </Text>
          {bio}
        </Text>
      </View>
    </ScrollView>
  );
};

export default UserBio;

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
    width: 100,
    height: 100,
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
  },
});
