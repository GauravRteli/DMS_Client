import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
 

import UserImage from "../assets/user.png";

import { Entypo } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import AsyncStorage from "@react-native-async-storage/async-storage";


const CustomDrawer = (props) => {
  const [user, setUser] = useState(null);
  const isFocused = useIsFocused();

  const removeUser = async () => {
    await AsyncStorage.removeItem("userDetails");
    setUser(null);
    props.navigation.navigate("Login");
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("userDetails");
      setUser(JSON.parse(value));
      if (value !== null) return true;
      else return false;
    } catch (e) {
      console.log(e);
    }
  };
    
    useEffect(() => {
      if (isFocused) {
        getData();
    }
  }, [isFocused]);

  return (
    <View className="flex-1">
      <View className="flex-column h-1/5 justify-center items-center mt-10">
        <Image
          source={UserImage}
          style={{ height: 100, width: 100, marginBottom: 10 }}
        />
        <View>
          <Text className="text-lg">{user ? user.name : "Unknown User"}</Text>
        </View>
      </View>

      <DrawerContentScrollView {...props}>
        <DrawerItemList
          {...props}
        />
      </DrawerContentScrollView>

      <View>
        <TouchableOpacity
          disabled={user == null}
          className="p-4 bg-blue-500 rounded-lg m-2"
          onPress={removeUser}
        >
          <View className="flex-row justify-center gap-2 items-center">
            <Text className="text-center text-white text-md font-bold">
              Log Out
            </Text>
            <Entypo name="log-out" size={20} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
