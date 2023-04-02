import React, { useEffect } from "react";
import "react-native-gesture-handler";
import { NativeModules } from 'react-native';
import { IP } from "@env";

import AppNavigator from "./Navigator/AppNavigator";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import AsyncStorage from "@react-native-async-storage/async-storage";


// Screens
import ContactUs from "./screens/ContactUs";
import Home from "./screens/Home";

const Drawer = createDrawerNavigator();

export default function App() {
  const { SourceCode } = NativeModules;
  const { scriptURL } = SourceCode;
  const setIp = async () => {
    const host = scriptURL?.split('://')[1].split(':')[0];
    await AsyncStorage.setItem("IP",host);
  }
  useEffect(() => {
    setIp();
  }, []);

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
