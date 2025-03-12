import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
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
