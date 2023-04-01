import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useIsFocused } from '@react-navigation/native';
import { IP } from '@env';

import axios from "axios";

import JobCard from "../components/JobCard";

const JobsScreen = ({ navigation }) => {
    const isFocused = useIsFocused();
    const [jobs, setJobs] = useState([]);

    const getJobs = async () => {
        const data = await axios.get(`http://${IP}/get-jobs`);
        if(data.status == 200){
            console.log("Successfully Got data");
            setJobs(data?.data);
        }else{
            alert("Network Error !");
        }
    }

    useEffect(() => {
        if (isFocused) {
            getJobs();
        }
      }, [isFocused]);

    return (
        <ScrollView>
            {
                jobs.map((job,index) => {
                    return <JobCard key={index} jobData={job} navigation={navigation} from="jobscreen" />
                })
            }
        </ScrollView>
    );
};

export default JobsScreen;
