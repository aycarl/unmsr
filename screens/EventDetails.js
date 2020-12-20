import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import ScreenHeader from "./../custom-components/ScreenHeader";

const EventDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScreenHeader title="" navigation={navigation} />
      <ScrollView contentContainerStyle={styles.eventDetailsContainer}>
        <Text style={styles.eventTitle} >Event Details Screen!</Text>
        <Text>Hosted by <Text>ORGANIZER</Text></Text>
        <Text style={styles.textHeaders} >Time</Text>
        <Text style={styles.textHeaders} >Summary</Text>
        <Text style={styles.textHeaders} >Description</Text>
        <Text style={styles.textHeaders} >Categories</Text>
        <Text style={styles.textHeaders} >Events type / class</Text>
        <View></View>
        <Text></Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  eventDetailsContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  eventTitle: {
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "uppercase",
    marginBottom: 10,
  },
  textHeaders: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 10,
  },
});

export default EventDetails;
