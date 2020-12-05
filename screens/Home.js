import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { StyleSheet } from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import ScreenHeader from "./../custom-components/ScreenHeader";
import UpdatesPreviewCard from "./../custom-components/UpdatePreviewCard";

const bgImage = { uri: "./../assets/stucco.png" };

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScreenHeader returnPage={false} title={"UNM Student Resource"} />
      <ImageBackground
        source={require("./../assets/330ppi/stucco330x.png")}
        style={styles.bgImage}
      >
        <SafeAreaView>
          <View style={styles.pageContent}>
            <Text style={styles.text}>UPDATES</Text>
            <ScrollView
              horizontal
              contentContainerStyle={styles.updatesHorizontalView}
            >
              <UpdatesPreviewCard />
              <UpdatesPreviewCard />
              <UpdatesPreviewCard />
            </ScrollView>
            <Text style={styles.textLink}>View all updates</Text>
            <Text style={styles.text}>MY CLUBS & ORGANISATIONS</Text>
          </View>
        </SafeAreaView>
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
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 0,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 15,
  },
  text: {
    fontWeight: "bold",
    paddingBottom: 10,
  },
  textLink: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "#ba0c2f",
    alignSelf: "flex-end",
    paddingBottom: 10,
  },
  updatesHorizontalView: {
    paddingBottom: 10,
  },
});

export default Home;
