import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IP } from '@env';

export async function getUser(userid){
    console.log(IP);
    const data = await axios.post(`http://${IP}/get-appuser`,{
        userid: userid
    });
    await AsyncStorage.setItem("userDetails",JSON.stringify(data?.data));
}