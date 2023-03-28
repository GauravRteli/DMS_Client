import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const ContactUsScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    // handle contact form submission logic here
    console.log("Clicked");
  };

  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Text className="text-3xl font-bold text-gray-800 mb-10">Contact Us</Text>
      <View className="w-4/5">
        <TextInput
          className="h-12 border-gray-300 border-b-2 mb-6 text-lg"
          placeholder="Name"
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TextInput
          className="h-12 border-gray-300 border-b-2 mb-6 text-lg"
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          className="h-40 border-gray-300 border-b-2 mb-6 pb-1 text-lg"
          placeholder="Message"
          multiline
          onChangeText={(text) => setMessage(text)}
          textAlignVertical="bottom"
          value={message}
        />
        <TouchableOpacity
          className="bg-blue-500 py-3 rounded-md"
          onPress={handleSend}
        >
          <Text className="text-white text-lg font-bold text-center">Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ContactUsScreen;
