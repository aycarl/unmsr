import React from "react";
import { View, StyleSheet, ImageBackground, Button } from "react-native";

import ScreenHeader from "../custom-components/ScreenHeader";
import EventsList from "../custom-components/EventsList";

// TODO: replace button with event details screen navigation functionality

const Events = ({ navigation}) => {
  return (
    <View style={styles.container}>
      <ScreenHeader returnPage={false} title="Events" />
      <ImageBackground
        source={require("./../assets/330ppi/stucco330x.png")}
        style={styles.bgImage}
      >
        <View style={styles.pageContent}>
          <Button  
            title="Event Details Screen"
            onPress={() => navigation.navigate('EventDetails')}
          />
          <EventsList />
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
