import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Screens
import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegisterScreen";
import ContactUs from "../screens/ContactUs";
import Home from "../screens/Home";
import JobsScreen from "../screens/JobsScreen";
import CustomDrawer from "../components/CustomDrawer";
import JobDetails from "../screens/JobDetailsScreen";
import JobsAppliedScreen from "../screens/JobsAppliedScreen";
import Notifications from "../screens/NotificationsScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Drawer Container .
const DrawerNavigator = ({ route }) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}

      >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Jobs" component={JobsScreen} />
      <Drawer.Screen name="AppliedJobs" component={JobsAppliedScreen} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
    </Drawer.Navigator>
  );
};

// Stack conatainer ..
export default AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Navbar"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
      <Stack.Screen name="JobDetails" component={JobDetails} />
      <Stack.Screen name="ContactUs" component={ContactUs} />
    </Stack.Navigator>
  );
};
