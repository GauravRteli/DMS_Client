import { View, Text, ScrollView, RefreshControl } from "react-native";
import React, { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import axios from "axios";

import JobCard from "../components/JobCard";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { getIP } from "../utils/getIp";

const JobsAppliedScreen = ({ navigation }) => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const isFocused = useIsFocused();
  const getJobs = async () => {
    setRefreshing(true);
    let value = JSON.parse(await AsyncStorage.getItem("userDetails"));
    const IP = await getIP();
    if (value != null) {
      const data = await axios.post(`http://${IP}:5000/get-appuser`, {
        userid: value._id,
      });

      await AsyncStorage.setItem("userDetails", JSON.stringify(data?.data));
      value = JSON.parse(await AsyncStorage.getItem("userDetails"));

      setAppliedJobs(value.appliedjob);
      setRefreshing(false);
    } else {
      alert("You have to login first !");
    }
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (isFocused) {
      getJobs();
    }
  }, [isFocused]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={getJobs} />
      }
    >
      {appliedJobs.map((appliedjob, index) => {
        return (
          <JobCard
            key={index}
            jobData={appliedjob.job}
            status={appliedjob.status}
            navigation={navigation}
            from="appliedjob"
          />
        );
      })}
    </ScrollView>
  );
};

export default JobsAppliedScreen;
