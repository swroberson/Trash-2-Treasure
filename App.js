import { staticBlock } from "@babel/types";
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from "./src/navigation/StackNavigation"


function App() {
  return (
      <NavigationContainer> 
        <StackNavigation/>
      </NavigationContainer>
  );
};

export default App;