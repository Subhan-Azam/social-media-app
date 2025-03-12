import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  lockSec: {
    fontWeight: 600,
    fontSize: 16,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  lockText: {
    marginTop: -2,
    fontWeight: 600,
  },
  profileImgSec: {
    borderWidth: 2,
    borderColor: COLORS.FRENCH_GRAY,
    width: 96,
    height: 96,
    borderRadius: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    marginVertical: 8,
  },
  profileImg: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  officialNameText: {
    fontWeight: 600,
    fontSize: 12,
  },
  bio: {
    textAlign: 'center',
    fontSize: 12,
    width: 240,
    borderColor: COLORS.FRENCH_GRAY,
    marginBottom: 10,
  },
});
