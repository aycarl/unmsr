import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";


// TODO: takes an image url and a url to Update page as props
const EventPreviewCard = ({ SUMMARY, DTSTART, UID}) => {
  const navigation = useNavigation();

  console.log("event UID for preview card: "+JSON.stringify(UID))

  return (
    <TouchableHighlight
      style={styles.container}
      activeOpacity={0.8}
      underlayColor="#fff"
      onPress={() => {
        navigation.navigate("EventDetails", {
          eventID: UID,
        });
      }}
    >
      <ImageBackground
        style={styles.image}
        source={require("./../../assets/updates/PNMGC_Notice.png")}
      >
        <Text style={styles.eventName} numberOfLines={1} ellipsizeMode={"tail"}>
          {SUMMARY} Some event name
        </Text>
        <Text style={styles.eventTime} numberOfLines={1} ellipsizeMode={"tail"}>
          {DTSTART} Some time
        </Text>
      </ImageBackground>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    borderColor: "#707070",
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: 10,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    padding: 7,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  eventName: {
    fontWeight: "bold",
    color: "#707070",
    textTransform: "uppercase",
  },
  eventTime: {
    color: "#707070",
  },
});

export default EventPreviewCard;
