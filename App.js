import { StatusBar } from "react-native";
import React from "react";
import Navigator from "./src/navigation";

export default function App() {
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor={"transparent"}
        barStyle={"light-content"}
      />
      <Navigator />
    </>
  );
}
