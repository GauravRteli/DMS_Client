import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { IP } from '@env';

import AppNavigator from './Navigator/AppNavigator';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import ContactUs from './screens/ContactUs';
import Home from './screens/Home';

const Drawer = createDrawerNavigator();



export default function App() {
 
  useEffect(() => {
    console.log(IP);
  },[])

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
