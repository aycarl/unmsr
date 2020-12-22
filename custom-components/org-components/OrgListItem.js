import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

// TODO: remember to make member count dynamic

const OrgListItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.clubLogoContainer}></View>
      <View style={styles.textContainer}>
        <Text style={styles.clubName}>Photography Club</Text>
        <Text style={styles.memberCount}>100 members</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 10,
  },
  clubLogoContainer: {
    width: 75,
    height: 75,
    backgroundColor: "#ba0c2f",
    marginRight: 10,
  },
  textContainer: {
    justifyContent: "space-around",
  },
  clubName: {
    fontSize: 15,
    fontWeight: "bold",
  }
});

export default OrgListItem;