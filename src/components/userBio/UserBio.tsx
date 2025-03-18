import {Image, View, Text, ScrollView} from 'react-native';
import React from 'react';
import {UserBioProps} from '../../types/types';
import UserIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './userBioStyle';
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
            <UserIcon name="user-circle" size={86} color={COLORS.GRAY} />
          )}
        </View>
        <Text style={styles.officialNameText}>{name}</Text>

        <Text style={styles.bio}>{bio}</Text>
      </View>
    </ScrollView>
  );
};

export default UserBio;
