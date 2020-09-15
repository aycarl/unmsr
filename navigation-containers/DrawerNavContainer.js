import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { SettingsScreen } from "../screens/SettingsScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { AppointmentsScreen } from "../screens/AppointmentsScreen";
import { InquiriesScreen } from "../screens/InquiriesScreen";

const Drawer = createDrawerNavigator();

const DrawerNavContainer = () => {
  return(
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Appointments" component={AppointmentsScreen} />
      <Drawer.Screen name="Inquiries" component={InquiriesScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavContainer;