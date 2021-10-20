import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen'
import TestScreen from '../screens/TestScreen'

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{
    headerShown: false
  }}>
            
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Home' }}
            />
            <Tab.Screen
                name="Test"
                component={TestScreen}
                options={{ title: 'Tests'}}
                />
        </Tab.Navigator>
    )
}

export default TabNavigation;