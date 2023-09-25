import { View, Text } from "react-native";
import React, { useEffect } from "react";
import {
  interpolateColor,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import {
  Canvas,
  LinearGradient,
  useComputedValue,
  useSharedValueEffect,
  useValue,
  vec,
} from "@shopify/react-native-skia";

export default function RainbowBackground() {
  const colorsValue = useSharedValue(1);
  const skiaFirstColor = useValue(0);
  const skiaSecondColor = useValue(0);

  useEffect(() => {
    skiaFirstColor.current = interpolateColor(
      colorsValue.value,
      [0, 1],
      ["#FFFFFF", "#000000"]
    );
    skiaSecondColor.current = interpolateColor(
      colorsValue.value,
      [0, 1],
      ["#FFFFFF", "#00ff00"]
    );
  }, [colorsValue]); // you can pass other shared values as extra parameters

  const colors = useComputedValue(() => {
    return [skiaFirstColor.current, skiaSecondColor.current];
  }, [skiaFirstColor, skiaSecondColor]);

  return (
    <Canvas
      style={{
        flex: 1,
      }}
    >
      {/* <LinearGradient
        start={vec(0, 0)}
        // end={vec(256, 256)}
        colors={["blue", "cyan"]}
        style={{ flex: 1 }}
      /> */}
    </Canvas>
  );
}
