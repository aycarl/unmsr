import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";

const EventListItem = ({
  eventDescription,
  eventLocation,
  eventSummary,
  eventStartDate,
  eventID,
}) => {
  
  const navigation = useNavigation();

  return (
    <TouchableHighlight activeOpacity={0.8} underlayColor="#fff" onPress={() => {navigation.navigate("EventDetails", {
      eventID: eventID
    })}}>
      <View style={styles.container}>
        <View style={styles.previewImagePlaecholder} />
        <View style={styles.textContainer}>
          <Text
            style={styles.headerText}
            numberOfLines={1}
            ellipsizeMode={"tail"}
          >
            {eventSummary}
          </Text>
          <Text
            style={styles.bodyText}
            numberOfLines={1}
            ellipsizeMode={"tail"}
          >
            {eventDescription}
          </Text>
          <Text style={styles.footerText}>{eventStartDate}</Text>
          <Text style={styles.footerText}>{eventLocation}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

// TODO: edit the text clipping on the body text
// TODO: randomize the default placeholder images
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 10,
  },
  previewImagePlaecholder: {
    height: 75,
    width: 10,
    backgroundColor: "#ba0c2f",
    marginRight: 10,
  },
  textContainer: {
    justifyContent: "space-evenly",
    width: "95%",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  bodyText: {
    fontSize: 14,
    textAlign: "left",
  },
  footerText: {
    fontSize: 14,
  },
});

export default EventListItem;
