import React from "react";
import { View, StyleSheet } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";

import EventListItem from "./EventListItem";

const EventsList = ({ data }) => {

  // used a render item to map array data to component props

  const renderItem = ({item}) => 
  <EventListItem
    key={item.UID}
    eventSummary={item.SUMMARY}
    eventDescription={item.DESCRIPTION}
    eventLocation={item.LOCATION}
    eventStartDate={item.DTSTART}
    eventID={item.UID}
  />;
  return (
    <View style={styles.notificationContainer}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.UID}
      />
    </View>
  );
};

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
