import {Image} from 'react-native';
import React from 'react';
import {IMAGES} from '../../constants/images';
import {styles} from './gridIconStyle';

const GridIcon = () => {
  return <Image style={styles.gridIcon} source={IMAGES.TABPNG} />;
};

export default GridIcon;
