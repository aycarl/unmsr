import React from "react";
import { View, StyleSheet, Text } from "react-native";

const EventDetails = () => {
  return (
    <View style={styles.container} >
      <Text>Event Details Screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default EventDetails;