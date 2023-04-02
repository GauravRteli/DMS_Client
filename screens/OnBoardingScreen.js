import { View, Text, Image } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";

const OnBoardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onDone={() => navigation.navigate("Drawer")}
      onSkip={() => navigation.replace("Drawer")}
      pages={[
        {
          backgroundColor: "#a6e4d0",
          image: <Image source={require("../assets/user.png")} />,
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#fdeb93",
          image: <Image source={require("../assets/user.png")} />,
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
      ]}
    />
  );
};

export default OnBoardingScreen;
