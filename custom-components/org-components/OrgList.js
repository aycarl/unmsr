import React from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import OrgListItem from "./OrgListItem";

const OrgList = () => {
  return (
    <View>
      <ScrollView>
        <OrgListItem />
        <OrgListItem />
        <OrgListItem />
        <OrgListItem />
        <OrgListItem />
        <OrgListItem />
      </ScrollView>
    </View>
  );
};

export default OrgList;