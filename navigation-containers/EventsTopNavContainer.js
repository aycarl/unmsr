import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Events from "./../screens/Events";
import MyOrgEvents from "./../screens/MyOrgEvents";

// creates Tab navigation for events
const Tab = createMaterialTopTabNavigator();

// Navigation container for Event list screens
const EventsTopNavContainer = () => {
  return (
    <Tab.Navigator initialRouteName="MyOrgEvents" lazy tabBarOptions={{
      labelStyle: {fontSize: 14, color: "#ffffff", fontWeight: "bold"},
      tabStyle: { marginTop: 20 },
      style: { backgroundColor: "#ba0c2f" },
      indicatorStyle: { backgroundColor: "#ffffff" }
    }}>
      <Tab.Screen
        name="MyOrgEvents"
        component={MyOrgEvents}
        options={{
          headerShown: false,
          title: "My Events",
        }}
      />
      <Tab.Screen
        name="AllUNMEvents"
        component={Events}
        options={{
          headerShown: false,
          title: "All UNM Events",
        }}
      />
    </Tab.Navigator>
  );
};

export default EventsTopNavContainer;
