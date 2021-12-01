import React, { useRef } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { FontAwesome, EvilIcons } from "@expo/vector-icons";
import { Colors } from "react-native-paper";
import { Swipeable } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { RemoveTask } from "../store/action";

const Task = ({ title, group, id }) => {
  const flatlistRef = useRef();
  const dispatch = useDispatch();

  const deleteTask = () => {
    Alert.alert("Completed Task?", "really really sure?", [
      { text: "No", onPress: () => {} },
      {
        text: "Yes",
        onPress: () => {
          if (group == "business") {
          } else if (group == "personal") {
          }

          dispatch(RemoveTask(group, id));
        },
      },
    ]);
  };

  let colors;

  if (group == "business") {
    colors = Colors.purple600;
  } else if (group == "personal") {
    colors = Colors.blue600;
  }

  const RightActions = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          deleteTask();
        }}
        activeOpacity={0.6}
        style={{
          justifyContent: "center",
          backgroundColor: "#DCDCDC",
          alignItems: "flex-end",
          borderTopEndRadius: 10,
          borderBottomEndRadius: 10,
        }}
      >
        <View>
          <EvilIcons name="trash" size={34} color="#808080" />
        </View>
      </TouchableOpacity>
    );
  };

  const swiped = () => {
    setTimeout(flatlistRef.current.close, 700);
  };
  return (
    <Swipeable
      ref={flatlistRef}
      renderRightActions={RightActions}
      onSwipeableOpen={() => {
        swiped();
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          paddingVertical: 15,
          elevation: 1,
          marginVertical: 3,
          width: "100%",
          alignSelf: "center",
        }}
      >
        <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
          <View style={{ flex: 1 }}>
            <FontAwesome name="circle-thin" size={24} color={colors} />
          </View>

          <View style={{ flex: 9 }}>
            <Text
              style={{
                fontFamily: "Regular",
                fontSize: 17,
                textDecorationStyle: "solid",
              }}
            >
              {title}
            </Text>
          </View>
        </View>
      </View>
    </Swipeable>
  );
};

export default Task;
