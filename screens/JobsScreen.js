import { View, ScrollView, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { IP } from "@env";

import axios from "axios";

import JobCard from "../components/JobCard";

const JobsScreen = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [jobs, setJobs] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const getJobs = async () => {
    setRefreshing(true);
    const data = await axios.get(`http://${IP}/get-jobs`);
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
