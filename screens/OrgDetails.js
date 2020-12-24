import React from "react";

import { View, StyleSheet, Text } from "react-native";

const OrgDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.nameHeader}>org.name</Text>
      </View>
      <View>
        <Text style={styles.orgDescription}>org.description</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  nameHeader: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  orgDescription: {
    fontSize: 12,
  }
});

export default OrgDetails;