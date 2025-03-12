import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginBottom: 10,
  },
  container: {
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'rgba(166, 166, 170, 0.16)',
  },
  cancelText: {
    color: 'red',
    fontWeight: 400,
    fontSize: 16,
  },
  editText: {
    color: COLORS.MINE_SHAFT,
    fontWeight: 600,
    fontSize: 16,
  },
  doneText: {
    color: COLORS.PICTON_BLUE,
    fontWeight: 600,
    fontSize: 16,
  },
  imgChangeSec: {
    alignItems: 'center',
    marginVertical: 16,
  },
  imgChange: {
    height: 95,
    width: 95,
    borderRadius: 100,
  },
  line: {
    width: '100%',
    height: 0.5,
    backgroundColor: COLORS.TUNA,
    marginTop: 20,
    marginBottom: 10,
  },
  box: {
    paddingHorizontal: 20,
  },

  bioSec: {
    flexDirection: 'row',
    marginTop: 10,
  },
  bioText: {
    width: 90,
    fontSize: 15,
  },
  bio: {
    fontSize: 15,
    width: '75%',
  },
  bioName: {
    fontWeight: 600,
    color: COLORS.CATALINA_BLUE,
    marginLeft: 5,
  },
  changeName: {
    fontWeight: 600,
    fontSize: 13,
    color: COLORS.PICTON_BLUE,
    marginTop: 10,
  },

  privateInfo: {
    fontWeight: 600,
    fontSize: 16,
    marginTop: 10,
  },
});
