import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/types';
import {UserProps} from '../../types/types';
import UserIcon from 'react-native-vector-icons/FontAwesome';

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
          {post.officialImg ? (
            <Image
              style={styles.officialImg}
              source={{uri: post.officialImg}}
            />
          ) : (
            <UserIcon name="user-circle" size={32} color="gray" />
          )}
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
        <Text style={styles.date}>{post.createdAt.split('T')[0]}</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
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
    width: '100%',
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
