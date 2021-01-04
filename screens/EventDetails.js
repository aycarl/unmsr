import React from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet, Text, Linking, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { selectEvent } from "./../redux/events/eventsSelectors";

import MoreDetailsEventFAB from "./../custom-components/event-components/eventFAB";

import {
  convertStringToReadableDateTime,
  extractEmailAndMailToLink,
  replaceAmpersandWithSynbol,
  extractEventDetailsLink,
  extractEventContactInfo
} from "../utils/dataUtils";

// event details screen
const EventDetails = (props) => {
  // selects event object given an event UID
  const eventInfo = useSelector(selectEvent(props.route.params.eventID));

  // to debug:
  // console.log(JSON.stringify("Event UID: " + props.route.params.eventID));
  // console.log(JSON.stringify("Event Details: " + JSON.stringify(eventInfo)));

  let startDateTime = convertStringToReadableDateTime(eventInfo.DTSTART)
    .fullUTCDateString;
  let endDateTime = convertStringToReadableDateTime(eventInfo.DTEND)
    .fullUTCDateString;
  const { emailAddress, mailToLink } = extractEmailAndMailToLink(
    eventInfo.ORGANIZER
  );

  const { contactEmail, contactName } = extractEventContactInfo(eventInfo.CONTACT);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./../assets/330ppi/stucco330x.png")}
        style={styles.bgImage}
      >
        <ScrollView contentContainerStyle={styles.eventDetailsContainer}>
          <Text style={styles.eventTitle}>
            {replaceAmpersandWithSynbol(eventInfo.SUMMARY)}
          </Text>
          {emailAddress ? (
            <Text>
              Hosted by{" "}
              <Text
                style={styles.textLink}
                onPress={() => Linking.openURL(mailToLink)}
              >
                {contactName}
              </Text>
            </Text>
          ) : (
            <Text></Text>
          )}
          <Text style={styles.textHeaders}>Start Time</Text>
          <Text>{startDateTime}</Text>
          <Text style={styles.textHeaders}>End Time</Text>
          <Text>{endDateTime}</Text>
          {eventInfo.LOCATION ? (
            <View>
              <Text style={styles.textHeaders}>Location</Text>
              <Text>{replaceAmpersandWithSynbol(eventInfo.LOCATION)}</Text>
            </View>
          ) : (
            <Text></Text>
          )}
          <Text style={styles.textHeaders}>Description</Text>
          <Text>
            {extractEventDetailsLink(eventInfo.DESCRIPTION).description}
          </Text>
          <Text style={styles.textHeaders}>Categories</Text>
          <Text>{replaceAmpersandWithSynbol(eventInfo.CATEGORIES)}</Text>
          <Text style={styles.textHeaders}>Type</Text>
          <Text>{eventInfo.CLASS}</Text>
        </ScrollView>
        {extractEventDetailsLink(eventInfo.DESCRIPTION).eventLink ? (
          <MoreDetailsEventFAB
            link={extractEventDetailsLink(eventInfo.DESCRIPTION).eventLink}
            email={contactEmail}
          />
        ) : (
          <View></View>
        )}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bgImage: {
    flex: 1,
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
    fontSize: 13,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginTop: 15,
    color: "#c05131",
  },
  textLink: {
    color: "#ba0c2f",
  },
});

export default EventDetails;
