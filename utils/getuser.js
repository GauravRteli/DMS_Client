import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getUser(userid){
    console.log(userid);
    const data = await axios.post("http://192.168.0.101:5000/get-appuser",{
        userid: userid
    });
    await AsyncStorage.setItem("userDetails",JSON.stringify(data?.data));
}