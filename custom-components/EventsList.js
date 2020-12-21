import React from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import EventListItem from "./EventListItem";

// TODO: change scrollview to refreshable flatlist 

const EventsList = ({ data }) => {
  
  return (
    <View style={styles.notificationContainer}>
      <ScrollView contentContainerStyle={styles.notificationsScroll} >
      {
        data.map(event => (<EventListItem 
          key={event.UID}
          eventSummary={event.SUMMARY} 
          eventDescription={event.DESCRIPTION} 
          eventLocation={event.LOCATION} 
          eventStartDate={event.DTSTART} 
          eventID={event.UID}
        />) )
        
      }
      </ScrollView>
    </View>
  );
}

// FIXME: remove blue text background color

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