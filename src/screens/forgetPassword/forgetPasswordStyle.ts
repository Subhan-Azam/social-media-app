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
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    padding: 20,
  },
  forgetPassDesc: {
    textAlign: 'center',
    color: COLORS.BLACK,
    marginBottom: 50,
  },
  inputsBox: {
    width: '100%',
  },
  textInput: {
    width: '100%',
    height: 44,
    borderColor: COLORS.BORDER_COLOR,
    backgroundColor: COLORS.ALABASTER,
    color: 'black',
    borderWidth: 1,
    borderRadius: 5,
    borderBlockColor: COLORS.BORDER_COLOR,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: -15,
    width: '100%',
    textAlign: 'left',
  },

  authBtn: {
    marginTop: -25,
    width: '100%',
  },
  MagicLinkBtn: {
    backgroundColor: COLORS.PICTON_BLUE,
    width: '100%',
    height: 44,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  MagicLinkBtnText: {
    color: 'white',
    fontWeight: 600,
  },
  endHrLine: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    height: 1,
    backgroundColor: COLORS.BLACK_SEC,
  },
});
