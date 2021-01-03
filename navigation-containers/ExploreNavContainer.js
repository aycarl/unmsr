import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Explore from "./../screens/Explore";

// creates stack navigation for Explore navigation container
const Stack = createStackNavigator();

// Navigation container for Explore-related screens
const ExploreNavContainer = () => {
  return (
    <Stack.Navigator initialRouteName="OrgDetails">
      <Stack.Screen
        name="ExploreHome"
        component={Explore}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ExploreNavContainer;
