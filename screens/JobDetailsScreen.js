import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { FontAwesome5 } from "@expo/vector-icons";
import { getUser } from "../utils/getuser";

const JobDetails = ({ route, navigation }) => {
  const { job, applied, from } = route.params;

  const registerUser = async () => {
    const value = await AsyncStorage.getItem("userDetails");
    if (value == null) {
      alert("You need to first login then only you can apply to the job !");
      navigation.navigate("Login");
    } else {
      const user = JSON.parse(value);
      let appliedjobs = user.appliedjob;
      let flag = false;

      appliedjobs.map((ele) => {
        if (ele._id == job._id) {
          flag = true;
        }
      });

      if (flag) {
        alert("Already Applied into the job");
      } else {
        const data = await axios.post(
          "http://192.168.0.101:5000/user-jobapplication",
          {
            user: JSON.parse(value),
            job_id: job._id,
          }
        );
        let userData = JSON.parse(value);
        getUser(userData._id);
      }
    }
  };

  return (
    <View className="flex-column justify-between h-full">
      <ScrollView className="p-4">
        <Text
          className="font-bold text-3xl text-center pt-10 pb-3 mb-2"
          style={{ borderBottomWidth: 1, borderBottomColor: "grey" }}
        >
          {job.jobname}
        </Text>
        <Text className="text-gray-600 mb-2">Company</Text>
        <Text className="text-gray-600 mb-4">Location</Text>
        <Text className="font-bold mb-2">Salary:</Text>
        <Text className="mb-2">
          {job.salary} <FontAwesome5 name="rupee-sign" size={13} color="black" />
        </Text>
        <View className="bg-gray-200 p-4 rounded-lg">
          <Text className="font-bold mb-2">Requirements:</Text>
          <Text>{job.requirements}</Text>
        </View>
        <View className="bg-gray-200 p-4 rounded-lg mt-4">
          <Text className="font-bold mb-2">Description:</Text>
          <Text>{job.description}</Text>
        </View>
      </ScrollView>
      {from == "jobscreen" ? (
        <TouchableOpacity
          className={
            "px-3 mx-1 mb-1 rounded-md" + applied
              ? "bg-green-300"
              : "bg-green-500"
          }
          disabled={applied}
          onPress={() => {
            registerUser();
          }}
        >
          <Text className="text-white text-center p-3 font-bold">
            {!applied ? "Apply" : "Applied"}
          </Text>
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </View>
  );
};

export default JobDetails;
