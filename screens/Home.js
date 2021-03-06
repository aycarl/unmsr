import React from "react";
import { ImageBackground, View } from "react-native";
import { StyleSheet } from "react-native";

import ScreenHeader from "./../custom-components/ScreenHeader";
import EventsPreviewContainer from "../custom-components/event-components/EventsPreviewContainer";
import OrgPreviewContainer from "../custom-components/org-components/OrgPreviewContainer";

// Home landing screen component
const Home = () => {
  return (
    <View style={styles.container}>
      <ScreenHeader returnPage={false} title={"UNM Student Resource"} />
      <ImageBackground
        source={require("./../assets/330ppi/stucco330x.png")}
        style={styles.bgImage}
      >
        <View style={styles.pageContent}>
          <EventsPreviewContainer />
          <OrgPreviewContainer />
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
    paddingVertical: 10,
  },
});

export default Home;
