import React from "react";
import { useSelector } from "react-redux";

import { selectEventsList } from "./../redux/events/eventsSelectors";

import { View, StyleSheet, ImageBackground } from "react-native";

import ScreenHeader from "../custom-components/ScreenHeader";
import EventsList from "../custom-components/event-components/EventsList";

// Events Home Screen component
const Events = () => {
  const data = useSelector(selectEventsList);

  // to debug
  //console.log("events: "+ JSON.stringify(data));

  return (
    <View style={styles.container}>
      <ScreenHeader title="Events" />
      <ImageBackground
        source={require("./../assets/330ppi/stucco330x.png")}
        style={styles.bgImage}
      >
        <View style={styles.pageContent}>
          <EventsList data={data} />
        </View>
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
  pageContent: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
});

export default Events;
