import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Explore from "./../screens/Explore";
import OrgDetails from "./../screens/OrgDetails";

const Stack = createStackNavigator();

const ExploreNavContainer = () => {
  return (
    <Stack.Navigator initialRouteName="OrgDetails" >
      <Stack.Screen name="ExploreHome" component={Explore} options={{
        headerShown: false,
      }} />
      <Stack.Screen
        name="OrgDetails"
        component={OrgDetails}
        options={{
          title: "",
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default ExploreNavContainer;
