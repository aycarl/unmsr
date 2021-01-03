import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, StyleSheet, ImageBackground } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

import { convertStringToReadableDateTime } from "./../../utils/dataUtils";

// TODO: takes an image url and  event UID to Update page as props
const EventPreviewCard = ({ SUMMARY, DTSTART, UID }) => {
  const navigation = useNavigation();

  // to debug
  // console.log("event UID for preview card: " + JSON.stringify(UID));

  const eventStart = convertStringToReadableDateTime(DTSTART).simpleDateString;

  // image randomizer for event pre view card
  const image = { uri: "https://picsum.photos/200/300" }

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
        // source={require("./../../assets/updates/PNMGC_Notice.png")}
        source={image}
      >
        <LinearGradient
          style={styles.linearGradient}
          colors={[
            "transparent",
            "transparent",
            "transparent",
            "rgba(0,0,0,0.8)",
          ]}
        >
          <Text
            style={styles.eventName}
            numberOfLines={1}
            ellipsizeMode={"tail"}
          >
            {SUMMARY}
          </Text>
          <Text
            style={styles.eventTime}
            numberOfLines={1}
            ellipsizeMode={"tail"}
          >
            {eventStart}
          </Text>
        </LinearGradient>
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
  },
  linearGradient: {
    flex: 1,
    padding: 10,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  eventName: {
    fontWeight: "bold",
    color: "#fff",
    textTransform: "uppercase",
  },
  eventTime: {
    color: "#fff",
  },
});

export default EventPreviewCard;
