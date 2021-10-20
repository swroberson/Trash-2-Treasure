import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import TabNavigation from './TabNavigation'
import MapOrLeaderboard from '../screens/MapOrLeaderboard'

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
            
            <Stack.Screen
                name="Home"
                component={TabNavigation}
                options={{ title: 'Home' }}
            />
            <Stack.Screen
                name="MapOrLeaderboard"
                component={MapOrLeaderboard}
                options={{ title: 'View Map or Leaderboard'}}
                />
        </Stack.Navigator>
    )
}

export default StackNavigation;