import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

interface props {
  post: {
    imageUrl: string;
    // description:string;
  };
}
const AllPosts: React.FC<props> = ({post}) => {
  return (
    <View style={styles.postContainer}>
      <Image style={styles.postImage} source={{uri: post.imageUrl}} />
    </View>
  );
};

export default AllPosts;

const styles = StyleSheet.create({
  postContainer: {
    width: '33.3%', // Ensure 3 items per row
    padding: 1,
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
  },
});
