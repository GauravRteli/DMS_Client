import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import JobsScreens from "../screens/JobsScreen";
import JobAppliedScreen from "../screens/JobsAppliedScreen";
import Notification from "../screens/NotificationsScreen";
import HomeScreen from "../screens/Home";

const Tab = createBottomTabNavigator();

function MyTabs(props) {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#3B82F6",
          tabBarInactiveTintColor: "black",
        })}
      >
        <Tab.Screen
          name="Homes"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, color, focused }) => {
              if (focused) {
                return <Entypo name="home" size={24} color="black" />;
              } else {
                return <Entypo name="home" size={24} color="grey" />;
              }
            },
          }}
        />
        <Tab.Screen
          name="Jobs"
          component={JobsScreens}
          options={{
            tabBarIcon: ({ size, color, focused }) => {
              if (focused) {
                return <Entypo name="briefcase" size={24} color="black" />;
              } else {
                return <Entypo name="briefcase" size={24} color="grey" />;
              }
            },
          }}
        />
        <Tab.Screen
          name="JobsApplied"
          component={JobAppliedScreen}
          options={{
            tabBarIcon: ({ size, color, focused }) => {
              if (focused) {
                return <MaterialCommunityIcons name="briefcase-check" size={24} color="black" />;
              } else {
                return <MaterialCommunityIcons name="briefcase-check" size={24} color="grey" />;
              }
            },
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notification}
          options={{
            tabBarBadge: 3,
            tabBarIcon: ({ size, color, focused }) => {
              if (focused) {
                return <Ionicons name="notifications" size={24} color="black" />;
              } else {
                return <Ionicons name="notifications" size={24} color="grey" />;
              }
            },
          }}
        />
      </Tab.Navigator>
  );
}

export default MyTabs;
