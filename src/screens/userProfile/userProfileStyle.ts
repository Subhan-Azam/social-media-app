import {StyleSheet} from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  postsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  errorText: {
    color: COLORS.RED,
    textAlign: 'center',
    marginTop: 20,
  },
  activityIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  noPostText: {
    textAlign: 'center',
    marginTop: 20,
  },
});
