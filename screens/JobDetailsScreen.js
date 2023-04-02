import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { IP } from '@env';

import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { FontAwesome5 } from "@expo/vector-icons";
import { getUser } from "../utils/getuser";

const JobDetails = ({ route, navigation }) => {
  const { jobData , applied, from, status } = route.params;
  const [ applied1,setApplied1 ] = useState(applied);
  const [color, setColor] = useState("bg-green-600");
  
  const registerUser = async () => {
    const value = await AsyncStorage.getItem("userDetails");
    if (value == null) {
      alert("You need to first login then only you can apply to the job !");
      navigation.navigate("Login");
    } else {
      const user = JSON.parse(value);
      // let appliedjobs = user.appliedjob;
      // let flag = false;

      // appliedjobs.map((ele) => {
      //   if (ele._id == jobData._id) {
      //     flag = true;
      //   }
      // });

      // if (flag) {
      //   alert("Already Applied into the job");
      // } else {
        console.log(IP);
        try{
          const data = await axios.post(
            `http://${IP}/user-jobapplication`,
            {
              user: JSON.parse(value),
              job_id: jobData._id,
            }
          );
          setApplied1(true);
          let userData = JSON.parse(value);
          getUser(userData._id);

        }catch(e){
          console.log(e);
        }
      // }
    }
  };

  useEffect(() => {
    if(applied1){
      setColor("bg-green-300")
    }else{
      setColor("bg-green-600")
    }
  },[applied1])

  return (
    <View className="flex-column justify-between h-full">
      <ScrollView className="p-4">
        <Text
          className="font-bold text-3xl text-center pt-10 pb-3 mb-2"
          style={{ borderBottomWidth: 1, borderBottomColor: "grey" }}
        >
          {jobData.jobname}
        </Text>
        {
            (status == 1)?<Text className="font-bold text-lg text-center text-blue-600" >Recruited</Text>:(status == 2)?<Text className="font-bold text-center text-lg text-red-600" >Rejected</Text>:<></>
        }
        <Text className="font-bold mb-2">Salary:</Text>
        <Text className="mb-2">
          {jobData.salary} <FontAwesome5 name="rupee-sign" size={13} color="black" />
        </Text>
        <View className="bg-gray-200 p-4 rounded-lg">
          <Text className="font-bold mb-2">Requirements:</Text>
          <Text>{jobData.requirements}</Text>
        </View>
        <View className="bg-gray-200 p-4 rounded-lg mt-4">
          <Text className="font-bold mb-2">Description:</Text>
          <Text>{jobData.description}</Text>
        </View>
      </ScrollView>
      {from == "jobscreen" ? (
        <TouchableOpacity
          className={`px-3 mx-1 mb-1 py-1 rounded-md ${color}`}
          disabled={applied1}
          onPress={() => {
            registerUser();
          }}
        >
          <Text className="text-white text-center p-3 font-bold">
            {!applied1 ? "Apply" : "Applied"}
          </Text>
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </View>
  );
};

export default JobDetails;
