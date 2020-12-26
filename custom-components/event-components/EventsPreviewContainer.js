import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { ScrollView } from "react-native-gesture-handler";

import EventPreviewCard from "./EventPreviewCard";

// TODO: Takes a list of update objects
const EventsPreviewContainer = () => {
  return (
    <View style={styles.updates}>
      <Text style={styles.text}>UPCOMING EVENTS</Text>
      <ScrollView
        horizontal
        contentContainerStyle={styles.horizontalScrollView}
      >
        <EventPreviewCard />
        <EventPreviewCard />
        <EventPreviewCard />
      </ScrollView>
      <Text style={styles.textLink}>VIEW ALL EVENTS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  updates: {
    flex: 3,
  },
  text: {
    fontWeight: "bold",
    paddingBottom: 10,
  },
  textLink: {
    fontWeight: "bold",
    color: "#ba0c2f",
    alignSelf: "flex-end",
    paddingBottom: 10,
  },
  horizontalScrollView: {
    paddingBottom: 10,
  },
});

export default EventsPreviewContainer;
