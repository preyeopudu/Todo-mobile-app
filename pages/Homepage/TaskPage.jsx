import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Task from "../../components/Task";
import { useSelector } from "react-redux";

const TaskPages = () => {
  const task = useSelector((s) => s.TaskReducer);

  const renderItem = ({ item }) => (
    <Task title={item.title} group={item.group} id={item.id} />
  );

  return (
    <View style={{ alignItems: "center" }}>
      <View style={{ width: "85%" }}>
        <Text style={{ fontFamily: "Montserrat", marginVertical: 20 }}>
          YOUR TASKS
        </Text>

        <View style={{ height: 400 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical={true}
            data={task}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    top: 0,
  },
});

export default TaskPages;
