import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import UserBio from '../../components/userBio/UserBio';
import ProfileGridIcon from '../../components/profileGridIcon/ProfileGridIcon';
import {SafeAreaView} from 'react-native-safe-area-context';
import EditProfileBtn from '../../components/Buttons/EditProfileBtn';
import AllPosts from '../../components/allPosts/AllPosts';

type LogInProps = {
  navigation: {
    navigate: (screen: string) => void;
  };
};
const SelfProfile: React.FC<LogInProps> = ({navigation}) => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <UserBio />
        <EditProfileBtn onPress={() => navigation.navigate('EditProfile')} />
        <ProfileGridIcon />
        <AllPosts />
      </SafeAreaView>
    </ScrollView>
  );
};

export default SelfProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
});
