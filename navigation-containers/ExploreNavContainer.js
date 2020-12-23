import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Explore from "./../screens/Explore";
import OrgDetails from "./../screens/OrgDetails";

const Stack = createStackNavigator();

const ExploreNavContainer = () => {
  return (
    <Stack.Navigator initialRouteName="OrgDetails" headerMode="none">
      <Stack.Screen name="ExploreHome" component={Explore} />
      <Stack.Screen
        name="OrgDetails"
        component={OrgDetails}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default ExploreNavContainer;
