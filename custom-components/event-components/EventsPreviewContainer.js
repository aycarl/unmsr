import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";

import { FlatList } from "react-native-gesture-handler";

import EventPreviewCard from "./EventPreviewCard";

import { selectEventsListArray, selectEventsList } from "./../../redux/events/eventsSelectors";

// render item for events preview container flatlist
const renderItem = ({item}) => <EventPreviewCard {...item} />;

// TODO: Takes a list of event objects
const EventsPreviewContainer = () => {
  const navigation = useNavigation();

  const eventsPreviewList = useSelector(selectEventsList);

  // to debug
  // console.log(
  //   "events for preview: " + JSON.stringify(eventsPreviewList)
  // );

  return (
    <View style={styles.updates}>
      <Text style={styles.text}>UPCOMING EVENTS</Text>
      <FlatList
        style={styles.horizontalScrollView}
        horizontal
        data={eventsPreviewList.slice(0,5)}
        renderItem={renderItem}
        keyExtractor={(item) => item.UID}
      />
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
    alignSelf: "flex-end",
  },
  horizontalScrollView: {
    marginBottom: 1,
  },
});

export default EventsPreviewContainer;
