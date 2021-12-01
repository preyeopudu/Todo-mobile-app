import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import DefaultStack from "./stack";
import { NavigationContainer } from "@react-navigation/native";
import IndexPage from "./pages/Homepage/index";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store/store";

const getFonts = () =>
  Font.loadAsync({
    Montserrat: require("./assets/fonts/Montserrat.ttf"),
    SemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    Regular: require("./assets/fonts/Montserrat-Regular.ttf"),
  });

export default function App() {
  const [loadFont, setLoadFont] = useState(false);

  if (loadFont) {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <View style={styles.container}>
            <DefaultStack />
          </View>
        </NavigationContainer>
      </Provider>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setLoadFont(true)}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
  },
});
