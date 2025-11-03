import { View, Text, TouchableOpacity } from 'react-native'
import { router } from 'expo-router';
import Ionicons from "@expo/vector-icons/Ionicons";


const Footer = () => {
  return (
      <View className="w-full absolute h-[10vh] bottom-0 left-0 z-50 bg-red-500 flex-row items-center justify-between px-8">
        <TouchableOpacity onPress={() => router.navigate("/product")} className="flex-col items-center">
          <Ionicons name="home-outline" size={24} color="black" />
          <Text >Product</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.navigate("/category")} className="flex-col items-center">
          <Ionicons name="albums-outline" size={24} color="black" />
          <Text >Category</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.navigate("/products")} className="flex-col items-center">
          <Ionicons name="accessibility-outline" size={24} color="black" />
          <Text >Products</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.navigate("/profile")} className="flex-col items-center">
          <Ionicons name="accessibility-outline" size={24} color="black" />
          <Text >Profile</Text>
        </TouchableOpacity>
      </View>
  )
}

export default Footer