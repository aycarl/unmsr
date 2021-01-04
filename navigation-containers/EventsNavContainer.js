import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import EventsTopNavContainer from "./EventsTopNavContainer";

// creates stack navigation for Events container
const Stack = createStackNavigator();

// Navigation container for Event-related screens
const EventsNavContainer = () => {
  return(
    <Stack.Navigator initialRouteName="EventsTopTab" > 
      <Stack.Screen name="EventsTopTab" component={EventsTopNavContainer} 
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default EventsNavContainer;