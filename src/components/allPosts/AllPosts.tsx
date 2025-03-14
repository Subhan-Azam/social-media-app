import {Image, View} from 'react-native';
import React from 'react';
import {AllPostsProps} from '../../types/types';
import {styles} from './allPostsStyle';

const AllPosts: React.FC<AllPostsProps> = ({post}) => {
  return (
    <View style={styles.postContainer}>
      {post.imageUrl && (
        <Image style={styles.postImage} source={{uri: post.imageUrl}} />
      )}
    </View>
  );
};

export default AllPosts;
