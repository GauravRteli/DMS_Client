import React from "react";
import { View, Text } from 'react-native';

function DrawerItem({ label, badge }) {
    return (
        <View>
        <Text>{label}</Text>
        {badge ? <Text>{badge}</Text> : null}
      </View>
    );
}

export default DrawerItem;