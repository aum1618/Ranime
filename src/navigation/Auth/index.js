import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AnimationNavigator from "../../screens/App/Animations/Navigation";

const Stack = createStackNavigator();

export default function Auth() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="animations" component={AnimationNavigator} />
    </Stack.Navigator>
  );
}
