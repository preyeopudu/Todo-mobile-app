import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from "react-native-gesture-handler";
import { FAB, Colors, RadioButton } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { AddBusiness, AddPersonal, AddTask } from "../../store/action";
import { useDispatch, useSelector } from "react-redux";

const Task = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [title, setTitle] = useState();
  const [check, setCheck] = useState(true);
  let group;
  let color;
  const task = useSelector((s) => s.TaskReducer);

  if (check) {
    color = Colors.purple600;
    group = "business";
  } else {
    color = Colors.blue800;
    group = "personal";
  }

  const HandleSubmit = () => {
    if (group == "business") {
      dispatch(AddBusiness(title, group));
    } else if (group == "personal") {
      dispatch(AddPersonal(title, group));
    }
    navigation.goBack();
  };

  return (
    <View style={{ backgroundColor: "white" }}>
      <TouchableWithoutFeedback
        style={{ backgroundColor: "white", height: "100%" }}
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={{ marginTop: 80, width: "78%", alignSelf: "center" }}>
          <FAB
            style={styles.fab}
            icon="close"
            animated={true}
            onPress={() => {
              navigation.navigate("Home");
            }}
          />

          <View style={{ marginTop: 120 }}>
            <TextInput
              onChangeText={(val) => {
                setTitle(val);
              }}
              placeholder="Enter new task"
              on
              style={{ fontFamily: "Regular", fontSize: 28 }}
              selectionColor={Colors.blue600}
              onFocus={() => {}}
            />

            <View
              style={{
                marginTop: 50,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "white",
                width: "55%",
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  elevation: 2,
                  flexDirection: "row",
                  alignItems: "center",
                  borderRadius: 2,
                  width: 130,
                  paddingVertical: 10,
                  justifyContent: "space-evenly",
                }}
              >
                <Text
                  style={{
                    fontFamily: "SemiBold",
                    color: "#A9A9A9",
                    fontSize: 18,
                    letterSpacing: 1,
                  }}
                >
                  {group}
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: "white",
                  elevation: 5,
                  borderRadius: 300,
                  padding: 4,
                }}
              >
                <RadioButton
                  onPress={() => {
                    setCheck(!check);
                  }}
                  status={"checked"}
                  color={color}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.taskButton}>
          <TouchableNativeFeedback
            onPress={() => HandleSubmit()}
            useForeground={false}
            style={{
              backgroundColor: color,
              elevation: 4,
              alignItems: "center",
              justifyContent: "space-evenly",
              flexDirection: "row",
              width: 200,
              paddingVertical: 15,
              borderRadius: 30,
            }}
          >
            <Text
              style={{
                fontFamily: "Regular",
                color: "white",
                fontSize: 17,
                letterSpacing: 1,
              }}
            >
              New task
            </Text>
            <AntDesign name="up" size={22} color="white" />
          </TouchableNativeFeedback>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    alignSelf: "flex-end",
    backgroundColor: "white",
  },
  taskButton: {
    alignSelf: "flex-end",
    marginTop: "60%",
    backgroundColor: "rgba(1,1,1,0.0)",
    borderRadius: 20,
    marginRight: 30,
  },
});

export default Task;
