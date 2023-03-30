import React from 'react';
import 'react-native-gesture-handler';

import AppNavigator from './Navigator/AppNavigator';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import ContactUs from './screens/ContactUs';
import Home from './screens/Home';

const Drawer = createDrawerNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
