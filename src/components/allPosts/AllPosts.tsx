import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {UserProps} from '../../types/types';

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

const styles = StyleSheet.create({
  postContainer: {
    width: '33.3%',
    padding: 1,
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
  },
});
