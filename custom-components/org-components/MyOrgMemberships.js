import React from "react";
import { View, Text, StyleSheet } from "react-native";

import OrgList from "./OrgList";

// TODO: write selector for user organisation memberships

const MyOrgMemberships = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Memberships</Text>
        {/* <OrgList /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    width: "100%",
    paddingHorizontal: 10,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 14,
    textTransform: "uppercase",
    marginBottom: 10,
  },
});

export default MyOrgMemberships;