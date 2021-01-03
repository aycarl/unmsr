import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

// creates stack navigation for auth container
const Stack = createStackNavigator();

// Navigation container for Authentication-related screens
const AuthNavContainer = () => {
  return(
    <Stack.Navigator initialRouteName="Login"  headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavContainer;