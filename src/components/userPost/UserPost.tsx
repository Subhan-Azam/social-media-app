import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/types';
import {UserProps} from '../../types/types';

const UserPost: React.FC<UserProps> = ({post}) => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'UserProfile'>
    >();
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('UserProfile', {userId: post.userUID});
          }}
          style={styles.profileHeader}>
          <Image
            style={styles.officialImg}
            source={
              post.officialImg
                ? {uri: post.officialImg}
                : require('../../assets/images/unknownIcon.jpg')
            }
          />
          <View>
            <View style={styles.officialName}>
              <Text style={styles.officialNameText}>{post.userName}</Text>
              <Image source={require('../../assets/images/OfficialIcon.png')} />
            </View>
            <View>
              <Text style={styles.userLocationText}>Tokyo, Japan</Text>
            </View>
          </View>
        </TouchableOpacity>

        <Image source={require('../../assets/images/MoreIcon.png')} />
      </View>

      <Image source={{uri: post.imageUrl}} style={styles.postImage} />
      <View style={styles.postDescDate}>
        <Text style={styles.desc}>
          <Text style={styles.descName}>{post.userName}</Text>{' '}
          {post.description}
        </Text>
        <Text style={styles.date}>{post.createdAt}</Text>
      </View>
    </>
  );
};

export default UserPost;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  profileHeader: {
    flexDirection: 'row',
    gap: 8,
  },
  officialImg: {
    width: 32,
    height: 32,
    borderRadius: 50,
  },
  officialName: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  postImage: {
    width: 370,
    height: 375,
    objectFit: 'cover',
  },
  officialNameText: {
    fontWeight: 600,
    fontSize: 13,
    color: '#262626',
  },
  userLocationText: {
    fontSize: 11,
    fontWeight: 400,
  },
  postDescDate: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    gap: 7,
  },
  desc: {
    fontSize: 13,
  },
  descName: {
    fontWeight: 600,
  },
  date: {
    color: '#00000066',
    fontSize: 11,
  },
});
