import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegisterScreen';
import ContactUs from '../screens/ContactUs';
import Home from '../screens/Home';
import DrawerNavigator from './DrawerNavigator';
const Stack = createNativeStackNavigator();

export default AppNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Navbar" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Drawer" component={DrawerNavigator} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="ContactUs" component={ContactUs} />
        </Stack.Navigator>
    )
}