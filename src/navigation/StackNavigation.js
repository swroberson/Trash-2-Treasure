import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MapOrLeaderboardScreen from '../screens/MapOrLeaderboardScreen'
import MapScreen from '../screens/MapScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import UserScreen from '../screens/UserScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen'
import ScanScreen from '../screens/ScanScreen'
import RecylingInfoScreen from '../screens/RecyclingInfo';

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
                name="Home"
                component={HomeScreen}
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
                name="RecylingInfoScreen"
                component={RecylingInfoScreen}
                options={{ title: 'Recycling Information'}}
            />
            <Stack.Screen
                name="UserScreen"
                component={UserScreen}
                options={{ title: 'View Profile'}}
            />
            <Stack.Screen
                name="Scan"
                component={ScanScreen}
                options={{ title: 'Scan Barcodes' }}
            /> 
        </Stack.Navigator>
    )
}

export default StackNavigation;