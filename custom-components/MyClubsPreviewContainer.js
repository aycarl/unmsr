import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import MyClubPreviewCard from "./MyClubsPreviewCard";

const MyClubsPreviewContainer = () => {
  return (
    <View style={styles.myClubs}>
      <Text style={styles.text}>MY CLUBS & ORGANISATIONS</Text>
      <ScrollView horizontal contentContainerStyle={styles.horizontalScrollView}>
        <MyClubPreviewCard />
        <MyClubPreviewCard />
        <MyClubPreviewCard />
        <MyClubPreviewCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  myClubs: {
    flex: 1,
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
  horizontalScrollView: {
    paddingBottom: 10,
  },
});

export default MyClubsPreviewContainer;