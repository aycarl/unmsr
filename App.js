import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AppNavContainer from "./navigation-containers/AppNavContainer";
import AuthNavContainer from "./navigation-containers/AuthNavContainer";

// dotenv
require("dotenv").config();

const theme = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    primary: "#ba0c2f",
    accent: "#a7a8aa",
    backdrop: "#ffffff",
  },
};

const userToken = "4356";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator headerMode="none" initialRouteName="HomeNav">
              {!userToken ? (
              <Stack.Screen name="Auth" component={AuthNavContainer} />
              ) : (
              <Stack.Screen name="HomeNav" component={AppNavContainer} />
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
