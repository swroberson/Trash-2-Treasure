import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import TabNavigation from './TabNavigation'
import MapOrLeaderboardScreen from '../screens/MapOrLeaderboardScreen'
import MapScreen from '../screens/MapScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import UserScreen from '../screens/UserScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ title: 'Login' }}
            />
            <Stack.Screen
                name="HomeStack"
                component={TabNavigation}
                options={{ title: 'Home' }}
            />
            <Stack.Screen
                name="MapOrLeaderboardScreen"
                component={MapOrLeaderboardScreen}
                options={{ title: 'View Map or Leaderboard'}}
            />
            <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{ title: 'Find a Recycling Point'}}
            />
            <Stack.Screen
                name="LeaderboardScreen"
                component={LeaderboardScreen}
                options={{ title: 'View Leaderboard'}}
            />
            <Stack.Screen
                name="UserScreen"
                component={UserScreen}
                options={{ title: 'View Profile'}}
            />
        </Stack.Navigator>
    )
}

export default StackNavigation;