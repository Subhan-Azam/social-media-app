import {Image, View} from 'react-native';
import React from 'react';
import {IMAGES} from '../../constants/images';
import {styles} from './splashScreenStyle';

const SplashScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={IMAGES.SPLASHSCREEN} style={styles.image} />
    </View>
  );
};

export default SplashScreen;
