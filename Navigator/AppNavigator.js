import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Screens
import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegisterScreen";
import ContactUs from "../screens/ContactUs";
import Home from "../screens/Home";
import JobDetails from "../screens/JobDetailsScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import OnBoardingScreen from "../screens/OnBoardingScreen";

import DrawerNavigator from "./DrawerNavigator";

const Stack = createNativeStackNavigator();

// Stack conatainer ..
export default AppNavigator = () => {
  const [isFirstLaunched, setIsFirstLaunched] = useState(null);
  const checkLaunch = async () => {
    const value = await AsyncStorage.getItem("alreadyLaunched");
    if (value == null) {
      setIsFirstLaunched(true);
      await AsyncStorage.setItem("alreadyLaunched", "true");
    } else {
      setIsFirstLaunched(false);
    }
  };
  useEffect(() => {
    checkLaunch();
  }, []);

  return (
    <Stack.Navigator
      initialRouteName="Navbar"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Onboarding" component={OnBoardingScreen} />
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="EditProfile"
        options={{ headerShown: true }}
        component={EditProfileScreen}
      />
      <Stack.Screen
        name="Registration"
        options={{ headerShown: true }}
        component={RegistrationScreen}
      />
      <Stack.Screen name="JobDetails" component={JobDetails} />
      <Stack.Screen name="ContactUs" component={ContactUs} />
    </Stack.Navigator>
  );

  // if(isFirstLaunched == null){
  //   return null;
  // }else if(isFirstLaunched == true){
  //   return (
  //     <Stack.Navigator
  //         initialRouteName="Navbar"
  //         screenOptions={{ headerShown: false }}
  //       >
  //         <Stack.Screen name="Onboarding" component={OnBoardingScreen} />
  //         <Stack.Screen name="Drawer" component={DrawerNavigator} />
  //         <Stack.Screen name="Home" component={Home} />
  //         <Stack.Screen name="Login" component={LoginScreen} />
  //         <Stack.Screen name="Registration" component={RegistrationScreen} />
  //         <Stack.Screen name="JobDetails" component={JobDetails} />
  //         <Stack.Screen name="ContactUs" component={ContactUs} />
  //       </Stack.Navigator>
  //     );
  // }else{
  //   return (
  //   <Stack.Navigator
  //       initialRouteName="Navbar"
  //       screenOptions={{ headerShown: false }}
  //     >
  //       <Stack.Screen name="Drawer" component={DrawerNavigator} />
  //       <Stack.Screen name="Home" component={Home} />
  //       <Stack.Screen name="Login" component={LoginScreen} />
  //       <Stack.Screen name="Registration" component={RegistrationScreen} />
  //       <Stack.Screen name="JobDetails" component={JobDetails} />
  //       <Stack.Screen name="ContactUs" component={ContactUs} />
  //     </Stack.Navigator>
  //   );
  // }
};
