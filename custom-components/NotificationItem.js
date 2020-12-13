import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NotificationItem = () => {

  let previewImage = false;

  return (
    <View style={styles.container}>
      {previewImage ? <Image /> : <View style={styles.previewImagePlaecholder}></View>}
      <View style={styles.textContainer}>
        <Text style={styles.headerText} >Club Name</Text>
        <Text style={styles.bodyText} numberOfLines={2} ellipsizeMode={"tail"} >Evenly distribute children the alignment container the main axis. children the alignment container along the main axis The spacing betweess.</Text>
        <Text style={styles.footerText} >Date * Venue</Text>
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
    //width: "100%"
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

export default NotificationItem;
