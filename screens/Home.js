import React from "react";
import { ImageBackground, View } from "react-native";
import { StyleSheet } from "react-native";

import ScreenHeader from "./../custom-components/ScreenHeader";
import UpdatesPreviewContainer from "../custom-components/UpdatesPreviewContainer";
import MyClubsPreviewContainer from "../custom-components/MyClubsPreviewContainer";

const bgImage = { uri: "./../assets/stucco.png" };

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScreenHeader returnPage={false} title={"UNM Student Resource"} />
      <ImageBackground
        source={require("./../assets/330ppi/stucco330x.png")}
        style={styles.bgImage}
      >
        <View style={styles.pageContent}>
          <UpdatesPreviewContainer />
          <MyClubsPreviewContainer />
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
    resizeMode: "cover",
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

export default Home;
