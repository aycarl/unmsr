import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BottomNavContainer from "./BottomNavContainer";
import EventDetails from "./../screens/EventDetails";
import OrgDetails from "./../screens/OrgDetails";

const Stack = createStackNavigator();

// a stack navigator to house all other application navigations apart from auth flow
const AppNavContainer = () => {
  return (
    <Stack.Navigator initialRouteName="HomeNav">
      <Stack.Screen
        name="HomeNav"
        component={BottomNavContainer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EventDetails"
        component={EventDetails}
        options={{
          title: "Event Details",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="OrgDetails"
        component={OrgDetails}
        options={{
          title: "Organization/Club Details",
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavContainer;
