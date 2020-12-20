import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectEventsList } from "./../redux/events/eventsSelectors";

import { View, StyleSheet, ImageBackground, Button } from "react-native";

import ScreenHeader from "../custom-components/ScreenHeader";
import EventsList from "../custom-components/EventsList";

// TODO: replace button with event details screen navigation functionality

// <Button
//   title="Event Details Screen"
//   onPress={() => navigation.navigate('EventDetails')}
// />

class Events extends Component {

  constructor(props) {
    super(props);
    const { eventsList, navigation } = props;
    this.state = {
      data: eventsList,
      navigation: navigation
    }
  }

  render() {

    const { eventsList, navigation } = this.state;

    console.log("This is " + navigation);

    return (
      <View style={styles.container}>
        <ScreenHeader returnPage={false} title="Events" />
        <ImageBackground
          source={require("./../assets/330ppi/stucco330x.png")}
          style={styles.bgImage}
        >
          <View style={styles.pageContent}>
            <EventsList navigation={navigation} data={eventsList} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

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

const mapStateToProps = createStructuredSelector({
  eventsList: selectEventsList,
});

export default connect(mapStateToProps)(Events);
