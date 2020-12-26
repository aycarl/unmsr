import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Explore from "./../screens/Explore";

const Stack = createStackNavigator();

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
