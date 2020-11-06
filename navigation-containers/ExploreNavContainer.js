import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Explore from "./../screens/Explore";

const Stack = createStackNavigator();

const ExploreNavContainer = () => {
  return(
    <Stack.Navigator initialRouteName="ExploreHome"  headerMode="none">
      <Stack.Screen name="ExploreHome" component={Explore} />
    </Stack.Navigator>
  );
}

export default ExploreNavContainer;