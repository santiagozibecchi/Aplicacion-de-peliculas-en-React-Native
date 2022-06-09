import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { LogBox } from 'react-native';
import { GradienteProvider } from './src/context/GradientContext';
// import FadeScreen from './src/screens/FadeScreen';

LogBox.ignoreLogs([
     "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
]);

const AppState = ({ children }: any) => {

     return (
          <GradienteProvider>
               {children}
          </GradienteProvider>
     );
};

const App = () => {
     return (
          <NavigationContainer>
               <AppState>
                    <Navigation />
               </AppState>
          </NavigationContainer>
     );
};

export default App;
