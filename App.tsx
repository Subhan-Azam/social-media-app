import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React from 'react';
import AuthNavigation from './src/navigation/AuthNavigation';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AuthNavigation />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
