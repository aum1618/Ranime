import { SafeAreaView, StatusBar } from "react-native";
import React from "react";

export default function SafeArea({ children }) {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      {children}
    </SafeAreaView>
  );
}
