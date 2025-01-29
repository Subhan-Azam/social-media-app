import {Button, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';

const LogOut = () => {
  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    const user = auth().currentUser;
    if (user) {
      setUserInfo(user);
    }
  }, []);

  const handleLogout = async () => {
    await auth().signOut();
  };
  return (
    <View>
      <Text>Welcome to the Home Page!</Text>
      {userInfo ? (
        <>
          <Text>ID: {userInfo.uid}</Text>
          <Text>Name: {userInfo.displayName}</Text>
          <Text>Email: {userInfo.email}</Text>
        </>
      ) : (
        <Text>Data Loading...</Text>
      )}
      <Button title="Log Out" onPress={handleLogout} />
    </View>
  );
};

export default LogOut;

// const styles = StyleSheet.create({});
