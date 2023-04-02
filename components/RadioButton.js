import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const RadioButton = ({ value, label, selectedValue, onSelect }) => {
  const isSelected = selectedValue === value;

  return (
    <TouchableOpacity
      className="flex-row items-center mx-2"
      onPress={() => onSelect(value)}
    >
      <View className={`${isSelected ? 'bg-blue-500 border-blue-500' : 'bg-gray-200 border-gray-400'} border-2 rounded-full w-6 h-6 flex items-center justify-center`}>
        {isSelected && (
          <View className="bg-white rounded-full w-4 h-4" />
        )}
      </View>
      <Text className="ml-2 text-gray-700 font-medium">{label}</Text>
    </TouchableOpacity>
  );
};

export default RadioButton;