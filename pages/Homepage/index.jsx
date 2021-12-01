import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { FAB, Colors } from "react-native-paper";
import CategoryPage from "./CategoryPage";
import HomePage from "./HomePage";
import TaskPages from "./TaskPage";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const navigation = useNavigation();
  const task = useSelector((s) => s.TaskReducer);

  return (
    <View
      style={{ flex: 1, flexDirection: "column", backgroundColor: "white" }}
    >
      <HomePage />
      <CategoryPage />
      <TaskPages />
      <FAB
        style={styles.fab}
        icon="plus"
        animated={true}
        onPress={() => {
          navigation.navigate("Task");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    alignSelf: "flex-end",
    right: 30,
    bottom: 100,
    backgroundColor: Colors.blue800,
  },
});

export default Home;
