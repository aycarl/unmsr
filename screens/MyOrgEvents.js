import React from "react";
import { useSelector } from "react-redux";

import { selectEventsList, selectEventsListByUserMembership } from "./../redux/events/eventsSelectors";
import { selectOrgMembershipList } from "./../redux/user/userSelectors";

import { View, StyleSheet, ImageBackground } from "react-native";

import EventsList from "../custom-components/event-components/EventsList";

// Events Home Screen component
const MyOrgEvents = () => {

  // select event data for user
  const userMembership = useSelector(selectOrgMembershipList);
  const data = useSelector(selectEventsListByUserMembership(userMembership));

  // to debug
  //console.log("events: "+ JSON.stringify(data));

  return (
    <View style={styles.container}>
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

export default MyOrgEvents;
