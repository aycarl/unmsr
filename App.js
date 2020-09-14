import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import { NavigationContainer } from "@react-navigation/native";

import DrawerNavContainer from "./navigation-containers/DrawerNavContainer";
import AuthNavContainer from "./navigation-containers/AuthNavContainer";

const theme = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    primary: "#ba0c2f",
    accent: "#a7a8aa",
  },
};

export default function App() {
  const [userToken, setUserToken] = React.useState(false);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        {userToken ? (
          <DrawerNavContainer
            userToken={userToken}
            setUserToken={setUserToken}
          />
        ) : (
          <AuthNavContainer />
        )}
      </NavigationContainer>
    </PaperProvider>
  );
}
