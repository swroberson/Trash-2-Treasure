import { staticBlock } from "@babel/types";
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from "./src/navigation/StackNavigation"
import { AuthProvider } from "./src/AuthProvider"


function App() {
  return (
    <AuthProvider>
      <NavigationContainer> 
        <StackNavigation/>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;