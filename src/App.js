import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { styles } from './components/styles';
import WelcomeScreen from './screens/WelcomeScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WelcomeScreen />
    </SafeAreaView>
  );
};

export default App;
