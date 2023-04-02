import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";


import ContactUs from "../screens/ContactUs";
import Home from "../screens/Home";
import CustomDrawer from "../components/CustomDrawer";
import ProfileScreen from "../screens/ProfileScreen";
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

// Drawer Container .
const DrawerNavigator = ({ route }) => {
    return (
      <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name="Home"
          component={TabNavigator}
          options={{
            drawerIcon: ({ color, size }) => (
              <Entypo name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="user" size={size} color={color} />
            ),
          }}
        />
        {/* <Drawer.Screen name="Jobs" component={JobsScreen} />
        <Drawer.Screen name="AppliedJobs" component={JobsAppliedScreen} /> */}
        {/* <Drawer.Screen
          name="Notifications"
          component={Notifications}
          options={{
            drawerLabel: "Notification",
            drawerIcon: () => null,
          }}
        /> */}
        <Drawer.Screen
          name="ContactUs"
          component={ContactUs}
          options={{
            drawerIcon: ({ color, size }) => (
              <FontAwesome5 name="phone-alt" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  };

export default DrawerNavigator;