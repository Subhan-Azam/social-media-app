import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import {IMAGES} from '../../constants/images';

const SplashScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={IMAGES.SPLASHSCREEN} style={styles.image} />
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
