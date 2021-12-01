import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";
import Task from "../pages/TasksPage/index";
import Home from "../pages/Homepage/index";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { InitiateTask } from "../store/action";
import {
  Buisnessolved,
  Personalsolved,
} from "../store/provider/solvedResolved";
const Stack = createStackNavigator();

const DefaultStack = () => {
  const l = useSelector((s) => s);

  const task = useSelector((s) => s.TaskReducer);
  const dispatch = useDispatch();
  useEffect(async () => {
    let list = await AsyncStorage.getItem("tasks");
    let buisnessolved = await AsyncStorage.getItem("buisnessolved");
    let buisnesstotal = await AsyncStorage.getItem("buisnesstotal");
    let personalsolved = await AsyncStorage.getItem("personalsolved");
    let personaltotal = await AsyncStorage.getItem("personaltotal");
    dispatch(
      InitiateTask(
        JSON.parse(list) ? JSON.parse(list) : [],
        buisnesstotal ? buisnesstotal : 0,
        personaltotal ? personaltotal : 0,
        buisnessolved ? buisnessolved : 0,
        personalsolved ? personalsolved : 0
      )
    );
    console.log(l);
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Task" component={Task} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default DefaultStack;
