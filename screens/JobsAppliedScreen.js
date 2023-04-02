import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { IP } from '@env';
import axios from 'axios';

import JobCard from "../components/JobCard";

import AsyncStorage from "@react-native-async-storage/async-storage";

const JobsAppliedScreen = ({ navigation }) => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [recruited, setRecruited] = useState(null);

  const isFocused = useIsFocused();
  const getJobs = async () => {
    let value = JSON.parse(await AsyncStorage.getItem("userDetails"));
    if(value != null){
      const data = await axios.post(`http://${IP}/get-appuser`,{
        userid: value._id
      });

      await AsyncStorage.setItem("userDetails",JSON.stringify(data?.data));
      value = JSON.parse(await AsyncStorage.getItem("userDetails"));
      if(value.recruitedInJob == null){
        setRecruited(null);
      }else{
        setRecruited(value.recruitedInJob._id);
      }
      setAppliedJobs(value.appliedjob);

    }else{
      alert("You have to login first !");
    }
  };

  useEffect(() => {
    if (isFocused) {
      getJobs();
    }
  }, [isFocused]);

  return (
    <ScrollView>
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
