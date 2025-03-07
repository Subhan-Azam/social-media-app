import {StyleSheet, View, Image, ScrollView, Text} from 'react-native';
import React from 'react';
import UserPost from '../../components/userPost/UserPost';
import useFetchAllPosts from '../../hooks/useFetchAllPosts';
import {SafeAreaView} from 'react-native-safe-area-context';
import Loader from '../../components/loader/Loader';
import {IMAGES} from '../../constants/images';
import {COLORS} from '../../constants/colors';

const Home = () => {
  const {posts, loading, error} = useFetchAllPosts();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.instaImgBox}>
          <Image source={IMAGES.INSTAGRAMLOGO} />
        </View>
        <View style={styles.line} />

        {loading ? (
          <Loader />
        ) : error ? (
          <Text>Failed to fetch posts</Text>
        ) : posts.length === 0 ? (
          <Text style={styles.noPostText}>No posts available.</Text>
        ) : (
          posts?.map(post => <UserPost key={post.id} post={post} />)
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  instaImgBox: {
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 10,
    backgroundColor: COLORS.ALABASTER,
    width: '100%',
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: COLORS.SPUN_PEARL,
  },
  noPostText: {
    position: 'absolute',
    top: 100,
    left: 100,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
});
