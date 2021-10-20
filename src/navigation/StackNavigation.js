import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import TabNavigation from './TabNavigation'
import MapOrLeaderboardScreen from '../screens/MapOrLeaderboardScreen'

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
                name="MapOrLeaderboardScreen"
                component={MapOrLeaderboardScreen}
                options={{ title: 'View Map or Leaderboard'}}
                />
        </Stack.Navigator>
    )
}

export default StackNavigation;