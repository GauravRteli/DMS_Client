import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import axios from "axios";
import Skills from "../components/Skills";
import RadioButton from "../components/RadioButton";
import { FontAwesome5 } from "@expo/vector-icons";
import { validateEmail } from "../utils/validations";
import { validateName } from "../utils/validations";
import { validatePhoneNo } from "../utils/validations";
import DateTimePicker from "@react-native-community/datetimepicker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getIP } from "../utils/getIp";

const EditProfile = ({ navigation }) => {
  const isFocused = useIsFocused();

  const [email, setEmail] = useState("");
  const [workerId,setWorkerId] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [name, setName] = useState("");
  const [isValidName, setIsValidName] = useState(true);
  const [phoneNo, setPhoneNo] = useState("");
  const [isValidPhoneNo, setIsValidPhoneNo] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [date, setDate] = useState(new Date());
  const [bio, setBio] = useState("");
  const [show, setShow] = useState(false);
  const [talent, setTalent] = useState({ skills: new Array() });
  const [skillField, setSkillField] = useState("");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [selectedValue, setSelectedValue] = useState("Male");

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  const removeSkill = (skillName) => {
    let i = talent.skills.indexOf(skillName);
    if (i != -1) {
      let arr = talent.skills;
      arr.splice(i, 1);
      setTalent({ ...talent, ["skills"]: arr });
    }
  };

  const addSkill = () => {
    if (skillField != "") {
      let arr = talent.skills;
      arr.push(skillField);
      setTalent({ ...talent, ["skills"]: arr });
      setSkillField("");
    } else {
      alert("Enter a Skill !");
    }
  };
  const resetForm = () => {
    setName("");
    setDate("");
    setTalent({ skills: new Array() });
    setPassword("");
    setConfirmPassword("");
    setEmail("");
    setPhoneNo("");
    setSkillField("");
  };

  const handleEdit = async () => {
    if (
      validateEmail(email) &&
      validateName(name) &&
      validatePhoneNo(phoneNo) &&
      date !== ""
    ) {
      const skillsarray = talent.skills;
      console.log(bio);
      try {
        const IP = await getIP();
        const data = await axios.post(`http://${IP}:5000/edit-appuser`, {
            workerId: workerId,
          name: name,
          sex: selectedValue,
          email: email,
          phoneNo: phoneNo,
          dateOfBirth: date,
          bio: bio,
          skills: skillsarray,
          password: password,
        });
        console.log(data);
        if (data.status == 200) {
          await AsyncStorage.setItem("userDetails",JSON.stringify(data?.data));
          navigation.navigate("Profile");
        } else {
          alert(data.data.message);
        }
      } catch (err) {
        alert(err);
      }
    } else {
      alert("Some Entered Fields are invalid");
    }
  };

  const setProfileData = async () => {
    const value = JSON.parse(await AsyncStorage.getItem("userDetails"));
    if (value != null) {
        setWorkerId(value?._id);
      setName(value?.name);
      setSelectedValue(value?.sex);
      setEmail(value?.email);
      setPhoneNo(value?.phoneNo);
      setTalent({ ...talent,["skills"]: value?.skills });
      setBio(value?.bio);
      setDate(new Date(value?.dateOfBirth));
    } else {
      alert("You Have to login first !");
      navigation.navigate("Login");
    }
  };

  useEffect(() => {
    if (isFocused) {
      setProfileData();
    }
  }, [isFocused]);

  return (
    <ScrollView>
      <View className="flex-1 bg-slate-100 justify-center items-center">
        {/* <View className="flex-row items-center self-stretch justify-center gap-3">
        <Text className="text-4xl font-bold text-gray-800">Edit Profile</Text>
        <FontAwesome5
          name="user-lock"
          size={24}
          color="black"
          className="animate-spin"
        />
      </View> */}
        <View className="w-11/12 px-5 py-8 shadow-lg shadow-slate-400/100">
          <TextInput
            className={`bg-white p-3 rounded-lg ${
              isValidName ? "border-gray-300 mb-4" : "bg-red-100"
            } text-lg`}
            placeholder="Full Name"
            onChangeText={(text) => {
              setName(text);
              if (validateName(text)) setIsValidName(true);
              else setIsValidName(false);
            }}
            value={name}
          />
          {!isValidName ? (
            <Text
              style={{ fontSize: 10, letterSpacing: 0.5 }}
              className="text-red-500 mb-4"
            >
              Not a Valid Name !
            </Text>
          ) : (
            <></>
          )}
          <View className="flex flex-row justify-start mb-4">
            <RadioButton
              value="Male"
              label="Male"
              selectedValue={selectedValue}
              onSelect={handleSelect}
            />
            <RadioButton
              value="Female"
              label="Female"
              selectedValue={selectedValue}
              onSelect={handleSelect}
            />
          </View>
          <TextInput
            className={`bg-white p-3 rounded-lg ${
              isValidEmail ? "border-gray-300 mb-4" : "bg-red-100"
            } text-lg`}
            placeholder="Email"
            onChangeText={(text) => {
              setEmail(text);
              if (validateEmail(text)) {
                setIsValidEmail(true);
              } else {
                setIsValidEmail(false);
              }
            }}
            value={email}
          />
          {!isValidEmail ? (
            <Text
              style={{ fontSize: 10, letterSpacing: 0.5 }}
              className="text-red-500 mb-4"
            >
              Not a Valid Email !
            </Text>
          ) : (
            <></>
          )}
          <TextInput
            className={`bg-white p-3 rounded-lg ${
              isValidPhoneNo ? "border-gray-300 mb-4" : "bg-red-100"
            } text-lg`}
            placeholder="Contact No."
            keyboardType="numeric"
            onChangeText={(text) => {
              setPhoneNo(text);
              if (validatePhoneNo(text)) {
                setIsValidPhoneNo(true);
              } else {
                setIsValidPhoneNo(false);
              }
            }}
            value={phoneNo}
          />
          {!isValidPhoneNo ? (
            <Text
              style={{ fontSize: 10, letterSpacing: 0.5 }}
              className="text-red-500 mb-4"
            >
              Not a Valid PhoneNo !
            </Text>
          ) : (
            <></>
          )}
          <Text>Date of Birth:</Text>
          <View className="d-flex flex-row gap-1 justify-between">
            <Text
              className="rounded-md text-2xl text-slate-600"
              style={{ textAlignVertical: "center" }}
            >
              {date
                ? `${date.getDate()}-${
                    months[date.getMonth()]
                  }-${date.getFullYear()}`
                : "DD-MM-YY"}
            </Text>

            <TouchableOpacity
              className="bg-blue-500 py-2 w-1/4 text-center rounded-full"
              onPress={() => setShow(true)}
            >
              <Text className="text-white text-lg font-bold text-center">
                Pick
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row flex-wrap p-2 mt-4 bg-white rounded-sm">
            {talent?.skills?.map((skillName, index) => {
              return (
                <Skills
                  key={index}
                  skillName={skillName}
                  removeSkill={removeSkill}
                />
              );
            })}
          </View>
          <View className="my-4 flex-row items-end justify-between">
            <TextInput
              className="bg-white p-3 h-12 w-2/3 rounded-lg"
              placeholder="Add skill"
              value={skillField}
              onChangeText={(text) => setSkillField(text)}
            />
            <TouchableOpacity
              className="bg-blue-500 py-2 rounded-md items-center justify-center"
              onPress={addSkill}
            >
              <Text className="text-white text-lg font-bold text-center px-2">
                ADD+
              </Text>
            </TouchableOpacity>
          </View>
          {show ? (
            <DateTimePicker
              testID="datetimepicker"
              value={
                new Date(date.getFullYear(), date.getMonth(), date.getDate())
              }
              mode="date"
              maximumDate={new Date()}
              is24Hour={true}
              display="inline"
              onChange={(selectedDate) => {
                setShow(false);
                setDate(new Date(selectedDate.nativeEvent.timestamp));
              }}
            />
          ) : (
            <></>
          )}
          <Text>Bio :</Text>
          <TextInput
            editable
            multiline
            numberOfLines={4}
            className="bg-white p-3 rounded-lg my-4"
            placeholder="Bio ...."
            onChangeText={(text) => setBio(text)}
            value={bio}
          />
          <TouchableOpacity
            className="bg-blue-500 py-3 rounded-md"
            onPress={handleEdit}
          >
            <Text className="text-white text-lg font-bold text-center">
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProfile;
