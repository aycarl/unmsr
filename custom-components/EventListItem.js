import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EventListItem = ({eventName, eventLocation, eventSummary, eventStartDate}) => {

  let previewImage = false;

  // FIXME: find solution for conditional display of image when available

  return (
    <View style={styles.container}>
      {previewImage ? <Image /> : <View style={styles.previewImagePlaecholder}></View>}
      <View style={styles.textContainer}>
        <Text style={styles.headerText} >{eventName}</Text>
        <Text style={styles.bodyText} numberOfLines={1} ellipsizeMode={"tail"} >{eventSummary}</Text>
        <Text style={styles.footerText} >{eventStartDate}</Text>
        <Text style={styles.footerText} >{eventLocation}</Text>
      </View>
    </View>
  );
};


// TODO: edit the text clipping on the body text
// TODO: randomize the default placeholder images
const styles = StyleSheet.create({
  container : {
    flex: 1,
    flexDirection: "row",
    marginBottom: 10,
  },
  previewImagePlaecholder: {
    height: 75,
    width: 75,
    backgroundColor: "#ba0c2f",
    marginRight: 10,
  },
  textContainer: {
    justifyContent: "space-evenly",
    width: "75%"
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
