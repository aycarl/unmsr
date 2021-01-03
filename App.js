import React from "react";
import { useSelector } from "react-redux";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AppNavContainer from "./navigation-containers/AppNavContainer";
import AuthNavContainer from "./navigation-containers/AuthNavContainer";

import { selectUserToken } from "./redux/user/userSelectors";

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

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider theme={theme}>
          <ApplicationContainer />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

// aplication container component to ensure that the userToken is accessible thru the redux provider
const ApplicationContainer = () => {
  const userToken = useSelector(selectUserToken);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="HomeNav">
        {!userToken ? (
          <Stack.Screen name="Auth" component={AuthNavContainer} />
        ) : (
          <Stack.Screen name="HomeNav" component={AppNavContainer} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
