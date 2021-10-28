import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen'
import ScanScreen from '../screens/ScanScreen'
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={({route}) => ({
    tabBarIcon: ({color}) => screenOptions(route, color), headerShown: false
  })}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Home' }}
            />
            <Tab.Screen
                name="Scan"
                component={ScanScreen}
                options={{ title: 'Scan Barcodes' }}
            />
        </Tab.Navigator>
    )
}

const screenOptions = (route, color) => {
    let iconName;
  
    switch (route.name) {
      case 'Home':
        iconName = 'home';
        break;
      case 'Scan':
        iconName = 'barcode-outline';
        break;
      default:
        break;
    }
  
    return <Icon name={iconName} color={color} size={24} />;
  }

export default TabNavigation;