import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const UserPost = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileHeader}>
          <Image source={require('../../assets/images/Oval.png')} />
          <View>
            <View style={styles.officialName}>
              <Text style={styles.officialNameText}>joshua_l</Text>
              <Image source={require('../../assets/images/OfficialIcon.png')} />
            </View>
            <View>
              <Text style={styles.userLocationText}>Tokyo, Japan</Text>
            </View>
          </View>
        </View>

        <Image source={require('../../assets/images/MoreIcon.png')} />
      </View>
      <Image source={require('../../assets/images/Rectangle.png')} />
      <View style={styles.postDescDate}>
        <Text style={styles.desc}>
          <Text style={styles.descName}>joshua_l</Text> The game in Japan was
          amazing and I want to share some photos
        </Text>
        <Text style={styles.date}>September 19</Text>
      </View>
    </View>
  );
};

export default UserPost;

const styles = StyleSheet.create({
  container: {},
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
  officialName: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
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
