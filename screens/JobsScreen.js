import { View, ScrollView, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { IP } from "@env";

import axios from "axios";

import JobCard from "../components/JobCard";
import { getIP } from "../utils/getIp";

const JobsScreen = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [jobs, setJobs] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getJobs = async () => {
    setRefreshing(true);
    const IP = await getIP();
    const data = await axios.get(`http://${IP}:5000/get-jobs`);
    if (data.status == 200) {
      console.log("Successfully Got data");
      setJobs(data?.data);
    } else {
      alert("Network Error !");
    }
    setRefreshing(false);
  };

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
      {jobs.map((job, index) => {
        return (
          <JobCard
            key={index}
            jobData={job}
            navigation={navigation}
            from="jobscreen"
          />
        );
      })}
    </ScrollView>
  );
};

export default JobsScreen;
