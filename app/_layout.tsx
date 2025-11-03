import { View, Text, TouchableOpacity } from "react-native";
import { router, Slot } from "expo-router"; 
import "../global.css";
import Footer from "@/layouts/footer";

const RootLayout = () => {
  return (
    <View className="relative w-full flex-1">
      <Slot />
    <Footer></Footer>
    </View>
  );
};

export default RootLayout;
