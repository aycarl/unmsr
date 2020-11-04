import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BottomNavContainer from "./navigation-containers/BottomNavContainer";
import AuthNavContainer from "./navigation-containers/AuthNavContainer";

const theme = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    primary: "#ba0c2f",
    accent: "#a7a8aa",
    backdrop: "#ffffff"
  },
};

const Stack = createStackNavigator();

export default function App() {

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none" >
          {/* {userToken ? ( */}
            <Stack.Screen name="Auth" component={AuthNavContainer} />
          {/* ) : ( */}
            <Stack.Screen name="HomeNav" component={BottomNavContainer} />
          {/* )} */}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
