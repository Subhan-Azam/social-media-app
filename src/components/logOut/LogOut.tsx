import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';

const LogOut = () => {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    console.log('logout working');
    setLoading(true);
    try {
      await auth().signOut();
      Toast.show({
        type: 'info',
        text1: 'LogOut',
        text2: 'You are successfully logout',
      });
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: error.message,
        text2: 'error in logout',
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogout} style={styles.btn}>
        <Text style={styles.btnText}>
          {loading ? <ActivityIndicator /> : 'Log Out'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogOut;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -5,
    marginBottom: 20,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 29,
    backgroundColor: '#F44336',
    borderWidth: 1,
    borderColor: '#3C3C432E',
    borderRadius: 6,
  },
  btnText: {
    color: 'white',
    fontWeight: 600,
    fontSize: 13,
  },
});
