import React from "react";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import EventListItem from "./EventListItem";

// used a render item to map array data to component props

const renderItem = ({ item }) => (
  <EventListItem
    key={item.UID}
    eventSummary={item.SUMMARY}
    eventDescription={item.DESCRIPTION}
    eventLocation={item.LOCATION}
    eventStartDate={item.DTSTART}
    eventID={item.UID}
  />
);

const EventsList = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.UID}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});

export default EventsList;
