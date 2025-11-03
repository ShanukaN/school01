import { View, Text } from "react-native";
import React from "react";
import "../global.css";
import { Link } from "expo-router";
import Header from "@/layouts/header";

const Index = () => {
  return (
    <View>
      <Header></Header>
      <Text className="text-5xl font-bold text-green-700">Home page</Text>
      <Link href={"/category"}>Category</Link>
      <Link href={"/products"}>products</Link>
      <Link
        href={{
          pathname: "/product",
          params: {
            name: "shanuka",
            city: "pallewela",
          },
        }}
      >
        product
      </Link>
      <Link
        href={{
          pathname: "/product/[productid]",
          params: {
            productid: "1st",
            city: "gampha",
          },
        }}
      >
        123
      </Link>
    </View>
  );
};

export default Index;
