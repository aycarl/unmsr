import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import EventListItem from "./EventListItem";

// TODO: change scrollview to refreshable flatlist 

const EventsList = () => {
  return (
    <View style={styles.notificationContainer}>
      <ScrollView contentContainerStyle={styles.notificationsScroll} >
        <EventListItem />
        <EventListItem />
        <EventListItem />
        <EventListItem />
        <EventListItem />
        <EventListItem />
        <EventListItem />
        <EventListItem />
        <EventListItem />
        <EventListItem />
        <EventListItem />
        <EventListItem />
        <EventListItem />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  notificationContainer: {
    flex: 1,
    width: "100%",
  },
  text: {
    fontWeight: "bold",
    paddingBottom: 10,
    textTransform: "uppercase",
  },
  notificationsScroll: {
    paddingBottom: 10,
  },
  moreImage: {
    height: 50,
  },
});

export default EventsList;