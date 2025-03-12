import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/types';
import {UserProps} from '../../types/types';
import UserIcon from 'react-native-vector-icons/FontAwesome';
import {IMAGES} from '../../constants/images';
import {styles} from './userPostStyle';

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
              <Image source={IMAGES.OFFICIALICON} />
            </View>
            <View>
              <Text style={styles.userLocationText}>Tokyo, Japan</Text>
            </View>
          </View>
        </TouchableOpacity>

        <Image source={IMAGES.MOREICON} />
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
