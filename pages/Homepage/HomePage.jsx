import React from "react";
import { View, Text } from "react-native";

const HomePage = () => {
  return (
    <View style={{ alignItems: "center", marginTop: 25 }}>
      <View style={{ backgroundColor: "white", width: "85%", marginTop: 50 }}>
        <Text
          style={{ fontSize: 29, fontFamily: "SemiBold", letterSpacing: 1 }}
        >
          What's up,User!
        </Text>
      </View>
    </View>
  );
};

export default HomePage;
