import { View, Text } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from "react-native-reanimated";

export default function EternalRipple() {
  const BorderRadius = useSharedValue(1);
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      borderRadius: BorderRadius.value * 25,
      transform: [
        { scale: BorderRadius.value },
        { rotate: `${BorderRadius.value * Math.PI * 2}rad` },
      ],
    };
  }, []);

  useEffect(() => {
    BorderRadius.value = withRepeat(withSpring(2), -1, true);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000000",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View
        style={[
          {
            height: 100,
            width: 100,
            backgroundColor: "cyan",
            justifyContent: "center",
            alignItems: "center",
          },
          reanimatedStyle,
        ]}
      >
        <Text style={{ color: "#111", fontSize: 36, fontWeight: "700" }}>
          XIX
        </Text>
      </Animated.View>
    </View>
  );
}
