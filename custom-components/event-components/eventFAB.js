import React from "react";
import { FAB } from "react-native-paper";
import { Linking, StyleSheet } from "react-native";

const MoreDetailsEventFAB = ({ link }) => {
  return (
    <FAB
      style={styles.FAB}
      large
      label="View more details"
      onPress={() => Linking.openURL(link)}
    />
  );
};

const styles = StyleSheet.create({
  FAB: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0,
    backgroundColor: "#c05131",
  },
});

export default MoreDetailsEventFAB;
