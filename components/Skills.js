import React, { useState } from "react";
import { Text, View,Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const Skills = ({skillName,removeSkill}) => {

    return <View className="bg-blue-200 p-1 m-1 w-auto rounded-lg flex-row">
        <Text className="text-blue-500 underline">{skillName}</Text>
        <AntDesign name="close" className="font-black text-black" size={15} color="black" onPress={() => removeSkill(skillName)} />
    </View>;
}

export default Skills;