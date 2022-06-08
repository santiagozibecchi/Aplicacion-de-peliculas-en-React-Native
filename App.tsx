import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
     "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
]);

const App = () => {
     return (
          <NavigationContainer>
               <Navigation />
          </NavigationContainer>
     );
};

export default App;
