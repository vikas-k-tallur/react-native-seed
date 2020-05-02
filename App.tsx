import 'react-native-gesture-handler';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import RootNavigation from './src/Navigation';

const App = () => {
  return (
    <PaperProvider>
      <RootNavigation />
    </PaperProvider>
  );
};


export default App;
