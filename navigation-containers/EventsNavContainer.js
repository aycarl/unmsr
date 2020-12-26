import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Events from "./../screens/Events";

const Stack = createStackNavigator();

// TODO: use redux to pass data to Detiails screen
// headerMode="none"

const EventsNavContainer = () => {
  return(
    <Stack.Navigator initialRouteName="EventsHome" > 
      <Stack.Screen name="EventsHome" component={Events} 
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default EventsNavContainer;