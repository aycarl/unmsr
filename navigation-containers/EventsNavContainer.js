import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Events from "./../screens/Events";

// creates stack navigation for Events container
const Stack = createStackNavigator();

// Navigation container for Event-related screens
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