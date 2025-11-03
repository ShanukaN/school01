import { View, Text } from "react-native";
import React from "react";
import "../global.css";

const Header = () => {
  return (
    <View className="w-full h-[70px] flex-row bg-blue-500 items-center justify-between pb-3 px-5">
      <View>
        <Text>Header</Text>
      </View>
      <View>
        <Text>Header</Text>
      </View>
      <View>
        <Text>Header</Text>
      </View>
      <View>
        <Text>Header</Text>
      </View>
    </View>
  );
};

export default Header;
