import React from 'react';
import AppNavigator from './Navigator/AppNavigator';
import DNavigator from './Navigator/DrawerNavigator';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ContactUs from './screens/ContactUs';
import Home from './screens/Home';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
      {/* <DNavigator /> */}
    </NavigationContainer>
  );
}
