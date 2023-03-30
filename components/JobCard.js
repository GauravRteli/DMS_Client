import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { FontAwesome5 } from "@expo/vector-icons";

const JobListing = ({ job, salaryReq, navigation, from }) => {
  
  const CheckUser = async () => {

    const value = await AsyncStorage.getItem("userDetails");
    if(value == null){
      alert("You have to login first !");
      navigation.navigate("Login");
    }else{
      const user = JSON.parse(value);
      let appliedjobs = user.appliedjob;
      let flag = false;
  
      appliedjobs.map((ele) => {
        if (ele._id == job._id) {
          flag = true;
        }
      });
  
      navigation.navigate("JobDetails", {
        job,salaryReq,applied: flag,from
      })
    }
  }
  return (
    <View className="flex flex-col p-2 mx-1 mt-1 border border-gray-300 rounded-md">
      <View className="grid grid-cols-4 mb-2">
        <View className="col-span-1">
          <Text className="font-bold text-lg">{job.jobname}</Text>
        </View>
        <View className="col-span-3 flex flex-row items-center justify-end">
          <Text className="font-bold mr-2">Salary:</Text>
          <Text>
            {job.salary}{" "}
            <FontAwesome5 name="rupee-sign" size={13} color="black" />
          </Text>
        </View>
      </View>
      <View className="flex flex-col mb-2">
        <Text className="font-bold">Requirements:</Text>
        <Text className="ml-3 mt-1">{job.requirements}</Text>
      </View>
      <TouchableOpacity
        className="px-3 py-1 bg-blue-500 rounded-md"
        onPress={() => CheckUser()}
      >
        <Text className="text-white text-center p-2 font-bold">View</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JobListing;
