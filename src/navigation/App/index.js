import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AnimationNavigator from "../../screens/App/Animations/Navigation";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="animations" component={AnimationNavigator} />
    </Stack.Navigator>
  );
}
