import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { View, TextInput, TouchableOpacity, Text } from "react-native";

const LoginScreen = () => {
  return (
    <View className="flex-1 gap-4 justify-center items-center bg-gray-100">
      <View className="flex-row items-center self-stretch justify-center gap-3">
        <Text className="text-4xl font-bold text-gray-800">Login</Text>
        <FontAwesome5
          name="user-lock"
          size={24}
          color="black"
          className="animate-spin"
        />
      </View>
      <View className="w-4/5">
        <TextInput
          className="bg-white p-3 rounded-lg mb-4"
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          className="bg-white p-3 rounded-lg mb-4"
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          className="bg-blue-500 p-3 rounded-lg items-center"
          onPress={() => console.log("Login button pressed")}
        >
          <Text className="text-white text-lg font-bold">
            Login <Entypo name="login" size={20} color="white" />{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
