import AsyncStorage from "@react-native-async-storage/async-storage";

export const Buisnessolved = (state = 0, action) => {
  switch (action.type) {
    case "DELETETASK":
      console.log(action);
      let num = parseInt(state);
      if (action.group == "business") {
        num = parseInt(state) + 1;
      }
      AsyncStorage.setItem("buisnessolved", JSON.stringify(num));
      return num;
    case "INITIAL":
      let initial = action.buisnessolved;
      return initial;
    default:
      return state;
  }
};

export const Personalsolved = (state = 0, action) => {
  switch (action.type) {
    case "DELETETASK":
      let num = parseInt(state);
      if (action.group == "personal") {
        num = parseInt(state) + 1;
      }
      AsyncStorage.setItem("personalsolved", JSON.stringify(num));
      return num;
    case "INITIAL":
      let initial = action.personalsolved;
      return initial;
    default:
      return state;
  }
};
