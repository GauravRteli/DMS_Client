import React,{ useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import axios from 'axios';
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const handleLogin = async () => {;
    const data = await axios.post("http://192.168.0.102:5000/appuser-login",{
      email,
      password
    });
    if(data.status == 201){
      setMessage(data?.data?.message);
    }else{
      setMessage(data?.data?.message);
    }
  }

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
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          className="bg-white p-3 rounded-lg mb-4"
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <Text>{message}</Text>
        <TouchableOpacity
          className="bg-blue-500 p-3 rounded-lg items-center"
          onPress={handleLogin}
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
