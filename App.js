import 'react-native-gesture-handler';
import { staticBlock } from "@babel/types";
import { Button, Text, TextInput, View, StyleSheet, SafeAreaView } from "react-native";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigation from "./src/navigation/StackNavigation"

const Drawer = createDrawerNavigator();

function App() {
  return (
      <NavigationContainer> 
        <StackNavigation/>
      </NavigationContainer>
  );
};

function HomeScreen () {
  return (
      <Drawer.Navigator initialRouteName="Map">
        <Drawer.Screen name="Map" component={MapScreen} />
        <Drawer.Screen name="View Map" component={MapScreen} />
      </Drawer.Navigator>
  );
};

function MapScreen() {
  return (
  <Button
    title="View Map"
  />
  );
};

export default App;