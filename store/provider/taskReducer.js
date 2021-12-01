import AsyncStorage from "@react-native-async-storage/async-storage";
import { v1 } from "uuid";

const TaskReducer = (state = [], action) => {
  switch (action.type) {
    case "ADDPERSONAL":
      let State = [
        ...state,
        { id: v1(), title: action.title, group: action.group },
      ];
      AsyncStorage.setItem("tasks", JSON.stringify(State));
      return State;
    case "ADDBUISNESS":
      let data = [
        ...state,
        { id: v1(), title: action.title, group: action.group },
      ];
      AsyncStorage.setItem("tasks", JSON.stringify(data));
      return data;

    case "DELETETASK":
      let task = state.filter((task) => task.id !== action.id);
      AsyncStorage.setItem("tasks", JSON.stringify(task));
      if (action.group == "personal") {
      } else if (action.group == "buisness") {
      }
      return task;
    case "INITIAL":
      let tasks = action.tasks;
      return tasks;
    default:
      return state;
  }
};

export default TaskReducer;
