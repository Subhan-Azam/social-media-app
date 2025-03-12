import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  editName: {
    width: 90,
  },
  editInput: {
    borderBottomWidth: 0.3,
    borderColor: COLORS.TUNA,
    width: '75%',
    color: 'black',
  },
});
