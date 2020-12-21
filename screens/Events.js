import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectEventsListArray } from "./../redux/events/eventsSelectors";

import { View, StyleSheet, ImageBackground, Button, Text } from "react-native";

import ScreenHeader from "../custom-components/ScreenHeader";
import EventsList from "../custom-components/EventsList";

// TODO: replace button with event details screen navigation functionality

class Events extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: props.eventsList,
    }
  }

  render() {

    const { data, navigation } = this.state;

    return (
      <View style={styles.container}>
        <ScreenHeader title="Events" />
        <ImageBackground
          source={require("./../assets/330ppi/stucco330x.png")}
          style={styles.bgImage}
        >
          <View style={styles.pageContent}>
            <EventsList navigation={navigation} data={data} />
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
  eventsList: selectEventsListArray
});

export default connect(mapStateToProps)(Events);
