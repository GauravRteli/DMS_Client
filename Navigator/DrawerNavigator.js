import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ContactUs from '../screens/ContactUs';
import Home from '../screens/Home';
import CustomDrawer from '../components/CustomDrawer';
import AppNavigator from './AppNavigator';
const Drawer = createDrawerNavigator();
export default function App() {
  return (
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="ContactUs" component={ContactUs} />
      </Drawer.Navigator>
  );
}
