import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MeatBall from "../Screens/MeatBall";
import EternalRipple from "../Screens/EternalRipple";
import RainbowBackground from "../Screens/RainbowBackground";
import Home from "../Home";

const Stack = createStackNavigator();

export default function AnimationNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="meatball" component={MeatBall} />
      <Stack.Screen name="rainbowbackground" component={RainbowBackground} />
      <Stack.Screen name="eternalripple" component={EternalRipple} />
    </Stack.Navigator>
  );
}
