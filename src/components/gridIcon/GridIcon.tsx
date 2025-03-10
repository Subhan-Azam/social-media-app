import {Image, StyleSheet} from 'react-native';
import React from 'react';
import { IMAGES } from '../../constants/images';

const GridIcon = () => {
  return (
    <Image
      style={styles.gridIcon}
      source={IMAGES.TABPNG}
    />
  );
};

export default GridIcon;

const styles = StyleSheet.create({
  gridIcon: {
    width: '100%',
  },
});
