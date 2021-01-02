import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import { Button } from "react-native-paper";

// https://sac.unm.edu/student-organizations/start-a-club.html
// component: explore organizations and connect!
const StartNewOrg = () => {
  return (
    <View style={styles.more}>
      <Text style={styles.moreText}>Not what you're interested in?</Text>
      <Button mode="text" onPress={() => Linking.openURL("https://sac.unm.edu/student-organizations/start-a-club.html")}>
        Start you own group!
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  more: {
    flex: 1,
    maxHeight: 150,
    width: "95%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderColor: "#707070",
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: "#ffffff",
    padding: 5,
    marginHorizontal: 10,
    overflow: "hidden",
  },
  moreText: {
    fontSize: 18,
    color: "#000",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  clubName: {
    fontWeight: "bold",
    color: "#707070",
    textTransform: "uppercase",
  },
});

export default StartNewOrg;