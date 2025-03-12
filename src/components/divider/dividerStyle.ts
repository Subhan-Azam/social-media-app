import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  Divider: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50,
  },
  orText: {
    color: COLORS.BLACK,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.BLACK_SEC,
  },
});
