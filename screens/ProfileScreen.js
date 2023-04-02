import React, { useEffect } from "react";
import { View, Image, Text, ScrollView } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import UserMaleImage from "../assets/user.png";
import UserFemaleImage from "../assets/userfemale.jpg";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen = ({ navigation }) => {
  const isFocused = useIsFocused();
  const getUserData = async ()=> {
    const value = JSON.parse(await AsyncStorage.getItem("userDetails"));
    console.log(value);
  }
  useEffect(() => { 
    getUserData();
  },[isFocused])

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="h-40">
        <View className="flex-row justify-end items-center px-4">
          <Text className="p-2" onPress={() => navigation.navigate("EditProfile")} >
            <AntDesign
              name="edit"
              size={24}
              color="black"
            />
          </Text>
        </View>
        <Image
          className="w-28 h-28 rounded-full mt-0 mx-auto"
          source={UserMaleImage}
        />
        <Text className="mt-3 text-xl font-medium text-white text-center">
          Jane Doe
        </Text>
        <Text className="text-sm font-light text-white text-center">
          jane.doe@example.com
        </Text>
      </View>
      <View className="pb-4 px-4">
        <View className="border-b-2 border-gray-200 py-2">
          <Text className="text-sm font-light text-gray-500">Username</Text>
          <Text className="text-lg font-medium text-gray-700 mt-2">
            janedoe
          </Text>
        </View>
        <View className="border-b-2 border-gray-200 py-2">
          <Text className="text-sm font-light text-gray-500">Email</Text>
          <Text className="text-lg font-medium text-gray-700 mt-2">
            jane.doe@example.com
          </Text>
        </View>
        <View className="border-b-2 border-gray-200 py-2">
          <Text className="text-sm font-light text-gray-500">Phone No.</Text>
          <Text className="text-lg font-medium text-gray-700 mt-2">
            6355312073
          </Text>
        </View>
        <View className="border-b-2 border-gray-200 py-2">
          <Text className="text-sm font-light text-gray-500">
            Date of Birth
          </Text>
          <Text className="text-lg font-medium text-gray-700 mt-2">
            24 May 2003
          </Text>
        </View>
        <View className="py-2">
          <Text className="text-sm font-light text-gray-500">Skills</Text>
          <View className="flex flex-row flex-wrap bg-slate-100 rounded-md p-1 ">
            <Text className="bg-slate-600 text-white rounded-md m-1 px-2 py-1">
              Gaurav
            </Text>
          </View>
        </View>
        <View className="py-2">
          <Text className="text-sm font-light text-gray-500">Bio</Text>
          <Text className="text-md p-2 bg-slate-100 font-medium text-gray-700 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
            enim orci. Duis euismod metus sit amet lacus tristique, id faucibus
            urna tincidunt.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
