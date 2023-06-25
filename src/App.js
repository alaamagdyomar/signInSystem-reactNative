import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { styles } from './components/styles';
// import WelcomeScreen from './screens/WelcomeScreen';
import SignInScreen from './screens/SignInScreen/SignInScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SignInScreen />
      {/* <WelcomeScreen/> */}
    </SafeAreaView>
  );
};

export default App;
