import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { ScrollView } from "react-native-gesture-handler";

import EventPreviewCard from "./EventPreviewCard";

// TODO: Takes a list of event objects
const EventsPreviewContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.updates}>
      <Text style={styles.text}>UPCOMING EVENTS</Text>
      <ScrollView
        horizontal
        contentContainerStyle={styles.horizontalScrollView}
      >
        <EventPreviewCard />
        <EventPreviewCard />
        <EventPreviewCard />
      </ScrollView>
      <Button
        mode="text"
        style={styles.textLink}
        onPress={() => {
          navigation.navigate("Events");
        }}
      >
        VIEW ALL EVENTS
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  updates: {
    flex: 3,
  },
  text: {
    fontWeight: "bold",
    paddingBottom: 10,
    marginHorizontal: 10,
    textTransform: "uppercase",
  },
  textLink: {
    fontWeight: "bold",
    color: "#ba0c2f",
    alignSelf: "flex-end",
  },
  horizontalScrollView: {
    marginBottom: 10,
    justifyContent: "space-around",
  },
});

export default EventsPreviewContainer;
