import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import App from "./App";
import Auth from "./Auth";

export default function Navigator() {
  return <NavigationContainer>{true ? <App /> : <Auth />}</NavigationContainer>;
}
