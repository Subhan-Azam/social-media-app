import {StyleSheet} from 'react-native';

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
    color: 'red',
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
