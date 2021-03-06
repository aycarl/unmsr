import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

// component: explore organizations and connect!
const NoEventsAvailable = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.more}>
      <Text style={styles.moreText}>All Caught Up!</Text>
      <Button mode="text" onPress={() => navigation.navigate("AllUNMEvents")}>
        Explore other events?
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
    marginHorizontal: 20,
    marginVertical: 10,
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

export default NoEventsAvailable;