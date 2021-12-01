import React from "react";
import { View, Text } from "react-native";
import { ProgressBar } from "react-native-paper";

const CategoryCard = (props) => {
  let name = "task";
  let progress = props.progress;

  if (isNaN(props.progress)) {
    progress = 0;
  }
  if (props.tasks > 1) {
    name = "tasks";
  }
  return (
    <View
      style={{
        width: 220,
        height: 120,
        elevation: 3,
        backgroundColor: "white",
        paddingVertical: 25,
        paddingHorizontal: 15,
        borderRadius: 20,
        marginHorizontal: 5,
      }}
    >
      <Text style={{ fontFamily: "Montserrat" }}>
        {props.tasks} {name}
      </Text>
      <Text style={{ fontFamily: "SemiBold", fontSize: 20, marginVertical: 9 }}>
        {props.category}
      </Text>
      <ProgressBar progress={progress} color={props.color} />
    </View>
  );
};

export default CategoryCard;
