import { View, Text, Image, Animated } from "react-native";
import React, { useRef, useEffect, useState } from "react";
import Onboarding from "react-native-onboarding-swiper";
import ContactUsScreen from "./ContactUs";

const Dot = ({ selected }) => {
  const [scaleValue] = useState(new Animated.Value(1)); // Initial value for scale: 1

  useEffect(() => {
    Animated.timing(
      scaleValue,
      {
        toValue: selected ? 1.5 : 1,
        duration: 500,
        useNativeDriver: true,
      }
    ).start();
  }, [selected, scaleValue]);

  return (
    <Animated.View                 
      style={{
        backgroundColor: selected ? '#fff' : 'rgba(255, 255, 255, 0.5)',
        width: selected ? 8 : 6,
        height: selected ? 8 : 6,
        borderRadius: 4,
        marginHorizontal: 4,
        transform: [{ scale: scaleValue }],
      }}
    />
  );
};

const OnboardingPage = ({ item }) => {

  useEffect(() => {
    console.log(item);
  },[])

  return (
    <View>
      {item.image}
      <Text>asdkls</Text>
      <Text>akdjsa</Text>
    </View>
  );
};

const OnBoardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onDone={() => navigation.navigate("Drawer")}
      onSkip={() => navigation.replace("Drawer")}
      DotComponent={Dot}
      pages={[
        {
          backgroundColor: "#a6e4d0",
          image: <Image source={require("../assets/user.png")} />,
          title: "Recruitments 🤩",
          subtitle: "This app can help you find your next career opportunity",
        },
        {
          backgroundColor: "#fdeb93",
          image: <Image source={require("../assets/user.png")} />,
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
      ]}
      renderItem={({ item }) => <OnboardingPage item={item} />}
      
    />
  );
};

export default OnBoardingScreen;
