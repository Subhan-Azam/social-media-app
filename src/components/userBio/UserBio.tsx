import {StyleSheet, Image, View, Text, ScrollView} from 'react-native';
import React from 'react';
import {UserBioProps} from '../../types/types';
import UserIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../constants/colors';

const UserBio: React.FC<UserBioProps> = ({
  officialImg,
  name,
  userName,
  bio,
}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.lockSec}>
          {userName && (
            <>
              <Icon name="lock" size={15} />
              <Text style={styles.lockText}>{userName}</Text>
            </>
          )}
        </View>
        <View style={styles.profileImgSec}>
          {officialImg ? (
            <Image style={styles.profileImg} source={{uri: officialImg}} />
          ) : (
            <UserIcon name="user-circle" size={86} color="gray" />
          )}
        </View>
        <Text style={styles.officialNameText}>{name}</Text>

        <Text style={styles.bio}>{bio}</Text>
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
  lockSec: {
    fontWeight: 600,
    fontSize: 16,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  lockText: {
    marginTop: -2,
    fontWeight: 600,
  },
  profileImgSec: {
    borderWidth: 2,
    borderColor: COLORS.FRENCH_GRAY,
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
    borderColor: COLORS.FRENCH_GRAY,
    marginBottom: 10,
  },
});
