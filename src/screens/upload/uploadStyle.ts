import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
  },
  header: {
    backgroundColor: COLORS.ALABASTER,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    height: 50,
  },
  headerText1: {
    fontSize: 16,
    fontWeight: '400',
  },
  headerText2: {
    fontSize: 16,
    fontWeight: '600',
  },
  headerText3: {
    width: 40,
  },
  centerUploadSec: {
    marginTop: 20,
    width: '90%',
  },
  uploadImgBox: {
    height: 360,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'dashed',
  },
  uploadImgText: {
    fontWeight: 600,
    fontSize: 14,
    marginTop: 5,
  },
  uploadedImage: {
    height: '100%',
    width: '100%',
  },
  descSec: {
    justifyContent: 'center',
    marginTop: 15,
    gap: 5,
  },
  descText: {
    fontWeight: 600,
    fontSize: 13,
    marginTop: 5,
  },
  descInput: {
    width: '100%',
    color: 'black',
    borderWidth: 1,
    borderColor: COLORS.BORDER_COLOR,
    backgroundColor: COLORS.ALABASTER,
    borderRadius: 5,
    height: 44,
    paddingHorizontal: 10,
  },
  AuthBtn: {
    marginTop: 60,
  },
});
