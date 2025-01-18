import {StyleSheet, Image, View} from 'react-native';
import React, {useEffect} from 'react';

type SplashScreenProps = {
  navigation: {
    replace: (screen: string) => void;
  };
};

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  useEffect(() => {
    const timeOutHandler = setTimeout(() => {
      navigation.replace('LogIn');
    }, 300);
    return () => clearTimeout(timeOutHandler);
  });

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/SplashScreen.png')}
        style={styles.image}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
