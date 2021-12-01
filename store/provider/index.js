import { combineReducers } from "redux";
import TaskReducer from "./taskReducer";
import { Personaltotal, Buisnesstotal } from "./totalreducers";
import { Personalsolved, Buisnessolved } from "./solvedResolved";

const Rootreducer = combineReducers({
  TaskReducer,
  Personaltotal,
  Buisnesstotal,
  Personalsolved,
  Buisnessolved,
});

export default Rootreducer;
