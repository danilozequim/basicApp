import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import React from 'react';

import { MainStackNavigator } from './src/navigation/StackNavigators';

const App = () => {
  return (
    //<LoginScreen />
    <NavigationContainer>
      <PaperProvider>
       <MainStackNavigator />
      </PaperProvider>
    </NavigationContainer>
  );
}

export default App;