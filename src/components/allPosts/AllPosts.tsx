import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

const AllPosts = () => {
  return (
    <View style={styles.posts}>
      <Image
        style={styles.postImage}
        source={require('../../assets/images/post.png')}
      />
      <Image
        style={styles.postImage}
        source={require('../../assets/images/post.png')}
      />
      <Image
        style={styles.postImage}
        source={require('../../assets/images/post.png')}
      />
      <Image
        style={styles.postImage}
        source={require('../../assets/images/post.png')}
      />
    </View>
  );
};

export default AllPosts;

const styles = StyleSheet.create({
  posts: {
    flexDirection: 'row',
    gap: 1,
    flexWrap: 'wrap',
  },
  postImage: {
    width: 119,
    height: 125,
    aspectRatio: 1,
  },
});
