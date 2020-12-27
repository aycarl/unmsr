import React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

const OrgFAB = () => {
  return(
    <FAB 
      style={styles.fab}
      small
      label="Join"
    />
  );
}

const styles =StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0,
    backgroundColor: "#D14081"
  }
});

export default OrgFAB;