import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegisterScreen';
import ContactUs from './screens/ContactUs';
import Home from './screens/Home';
const Stack = createNativeStackNavigator();

export default AppNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
            <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
            <Stack.Screen name="Registration" options={{ headerShown: false }} component={RegistrationScreen} />
            <Stack.Screen name="ContactUs" options={{ headerShown: false }} component={ContactUs} />
        </Stack.Navigator>
    )
}