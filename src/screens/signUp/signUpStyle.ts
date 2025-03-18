import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  backIcon: {
    position: 'absolute',
    top: 30,
    left: 17,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    padding: 20,
  },
  instagramImg: {
    marginBottom: 30,
  },
  inputsBox: {
    width: '100%',
    gap: 15,
  },
  textInput: {
    width: '100%',
    height: 44,
    borderColor: COLORS.BORDER_COLOR,
    backgroundColor: COLORS.ALABASTER,
    color: COLORS.DARK,
    borderWidth: 1,
    borderRadius: 5,
    borderBlockColor: COLORS.BORDER_COLOR,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInputPass: {
    width: '90%',
    color: COLORS.DARK,
  },
  changeIcon: {
    height: 25,
    width: 25,
  },
  error: {
    color: COLORS.RED,
    fontSize: 12,
    marginTop: -15,
  },

  signUpBtn: {
    backgroundColor: COLORS.PICTON_BLUE,
    width: '100%',
    height: 44,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  signUpBtnText: {
    color: COLORS.WHITE,
    fontWeight: 600,
  },

  signUpSec: {
    flexDirection: 'row',
  },
  signUpText1: {
    color: COLORS.GRAY,
  },
  signUpText2: {
    color: COLORS.PICTON_BLUE,
  },
});
