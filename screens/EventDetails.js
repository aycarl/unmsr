import React from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import {
  selectEvent,
} from "./../redux/events/eventsSelectors";

const EventDetails = (props) => {

  const eventInfo = useSelector(selectEvent(props.route.params.eventID));

  // to debug: 
  console.log(JSON.stringify("Event UID: "+ props.route.params.eventID));
  console.log(JSON.stringify("Event Details: "+ JSON.stringify(eventInfo)));

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.eventDetailsContainer}>
        <Text style={styles.eventTitle}>{eventInfo.SUMMARY}</Text>
        <Text>
          Hosted by <Text>{eventInfo.ORGANIZER}</Text>
        </Text>
        <Text style={styles.textHeaders}>Time</Text>
        <Text>
          {eventInfo.DTSTART}
        </Text>
        <Text style={styles.textHeaders}>Description</Text>
        <Text>
          {eventInfo.DESCRIPTION}
        </Text>
        <Text style={styles.textHeaders}>Categories</Text>
        <Text>
          {eventInfo.CATEGORIES}
        </Text>
        <Text style={styles.textHeaders}>Event type / class</Text>
        <Text>
          {eventInfo.CLASS}
        </Text>
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
    marginVertical: 10,
  },
});

export default EventDetails;
