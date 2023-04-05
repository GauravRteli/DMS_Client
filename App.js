import React from "react";
import "react-native-gesture-handler";

import AppNavigator from "./Navigator/AppNavigator";

import { NavigationContainer } from "@react-navigation/native";

// Screens

export default function App() {

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
