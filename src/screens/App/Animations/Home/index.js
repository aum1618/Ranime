import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { HelpCircle, Menu } from "lucide-react-native";
import { getRandomColor } from "../../../../utils/RandomColor";
import SafeArea from "../../../../components/SafeArea";

export default function Home({ navigation }) {
  console.log(
    "🚀 ~ file: index.js:11 ~ Home ~ StatusBar.currentHeight:",
    StatusBar.currentHeight
  );

  const AnimationList = [
    { name: "MeatBall Effect", screen: "meatball" },
    { name: "Eternal Ripple", screen: "eternalripple" },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#111" }}>
      <SafeArea>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Menu color="white" />
          <Text style={{ color: "white" }}>Animations Collection</Text>
          <HelpCircle color="white" />
        </View>
        <FlatList
          numColumns={2}
          style={{ margin: 20 }}
          data={AnimationList}
          keyExtractor={(item) => {
            item.name;
          }}
          renderItem={({ item }) => {
            return (
              <AnimationButton
                name={item.name}
                navigation={navigation}
                screen={item.screen}
              />
            );
          }}
        />
      </SafeArea>
    </View>
  );
}

const AnimationButton = ({ name, screen, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(`${screen}`)}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        backgroundColor: getRandomColor(),
        padding: 20,
        margin: 10,
      }}
    >
      <Text style={{ color: "white", fontWeight: "700" }}>{name}</Text>
    </TouchableOpacity>
  );
};
