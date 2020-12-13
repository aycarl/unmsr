import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Button, StyleSheet, ImageBackground } from "react-native";

import ScreenHeader from "./../custom-components/ScreenHeader";
import NotificationItemContainer from "./../custom-components/NotificationItemContainer";

const Notifications = () => {
  return (
    <View style={styles.container}>
      <ScreenHeader returnPage={false} title="Notifications" />
      <ImageBackground
        source={require("./../assets/330ppi/stucco330x.png")}
        style={styles.bgImage}
      >
        <View style={styles.pageContent}>
          <NotificationItemContainer />
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

export default Notifications;
