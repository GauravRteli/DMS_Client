import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";

import JobCard from "../components/JobCard";

import AsyncStorage from "@react-native-async-storage/async-storage";

const JobsAppliedScreen = ({ navigation }) => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const isFocused = useIsFocused();

  const getJobs = async () => {
    const value = JSON.parse(await AsyncStorage.getItem("userDetails"));
    if(value == null){
      alert("You have to login first !");
      // navigation.navigate("Login");
    }else{
        setAppliedJobs(value.appliedjob);
    }
  };

  useEffect(() => {
    if (isFocused) {
      getJobs();
    }
  }, [isFocused]);

  return (
    <ScrollView>
      {appliedJobs.map((job, index) => {
        return (
          <JobCard
            key={index}
            job={job}
            navigation={navigation}
            from="appliedjob"
          />
        );
      })}
    </ScrollView>
  );
};

export default JobsAppliedScreen;
