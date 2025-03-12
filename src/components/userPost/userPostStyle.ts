import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  officialImg: {
    width: 32,
    height: 32,
    borderRadius: 50,
  },
  officialName: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  postImage: {
    width: '100%',
    height: 375,
    objectFit: 'cover',
  },
  officialNameText: {
    fontWeight: 600,
    fontSize: 13,
    color: COLORS.MINE_SHAFT,
  },
  userLocationText: {
    fontSize: 11,
    fontWeight: 400,
  },
  postDescDate: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    gap: 7,
  },
  desc: {
    fontSize: 13,
  },
  descName: {
    fontWeight: 600,
  },
  date: {
    color: COLORS.BLACK,
    fontSize: 11,
  },
});
