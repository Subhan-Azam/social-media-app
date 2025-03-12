import {Image, View} from 'react-native';
import React from 'react';
import {UserProps} from '../../types/types';
import {styles} from './allPostsStyle';

const AllPosts: React.FC<UserProps> = ({post}) => {
  return (
    <View style={styles.postContainer}>
      {post.imageUrl && (
        <Image style={styles.postImage} source={{uri: post.imageUrl}} />
      )}
    </View>
  );
};

export default AllPosts;
