import {StyleSheet} from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  editBtnSec: {
    alignItems: 'center',
  },
  noPostText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.GRAY,
    textAlign: 'center',
    marginTop: 10,
  },
  postsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
