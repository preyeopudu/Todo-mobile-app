import AsyncStorage from "@react-native-async-storage/async-storage";

export const Buisnesstotal = (state = 0, action) => {
  switch (action.type) {
    case "ADDBUISNESS":
      let num = parseInt(state) + 1;
      AsyncStorage.setItem("buisnesstotal", JSON.stringify(num));
      return num;
    case "INITIAL":
      let initial = action.buisnesstotal;
      console.log(initial);
      return initial;
    default:
      return state;
  }
};

export const Personaltotal = (state = 0, action) => {
  switch (action.type) {
    case "ADDPERSONAL":
      let num = parseInt(state) + 1;
      AsyncStorage.setItem("personaltotal", JSON.stringify(num));
      return num;
    case "INITIAL":
      let initial = action.personaltotal;
      console.log(initial);
      return initial;
    default:
      return state;
  }
};
