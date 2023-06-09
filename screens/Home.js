import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useRef, useState } from "react";
import { useIsFocused } from '@react-navigation/native'
import { View, Text, TouchableOpacity, Animated } from "react-native";

const HomeScreen = ({ navigation }) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [isLogin, setIsLogin] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [scaleAnim, fadeAnim]);

  const getUserDetails = async () => {
    const value = await AsyncStorage.getItem("userDetails");
    if (value) setIsLogin(true);
    else setIsLogin(false);
  };

  useEffect(() => {
    if(isFocused){
      getUserDetails();
    }
  }, [isFocused]);

  return (
    <View className="flex-1 justify-center p-3 items-center bg-gray-100">
      <Animated.Text
        className="text-4xl font-bold text-center mb-4"
        style={{ transform: [{ scale: scaleAnim }] }}
      >
        Dev Management Services
      </Animated.Text>
      <Animated.Text
        className="text-md text-center tracking-wide mb-8"
        style={{ opacity: fadeAnim }}
      >
        "Delivering exceptional service is not a choice, it's our commitment."
      </Animated.Text>
      {
        !isLogin && <View className="absolute bottom-0 left-0 right-0 flex-row justify-center p-4">
        <TouchableOpacity
          className="bg-blue-500 rounded-md py-2 px-4 mr-4"
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="text-white font-bold">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-gray-500 rounded-md py-2 px-4"
          onPress={() => navigation.navigate("Registration")}
        >
          <Text className="text-white font-bold">Register</Text>
        </TouchableOpacity>
      </View>
      }
    </View>
  );
};

export default HomeScreen;
