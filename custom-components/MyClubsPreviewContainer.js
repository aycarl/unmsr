import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
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
        <AllMyClubs />
      </ScrollView>
    </View>
  );
};

const AllMyClubs = () => {
  return (
    <View style={styles.more} >
      <Image 
        style={styles.moreImage}
        source={require("./../assets/icons/chevron-right.png")}
      />
      <Text style={styles.clubName}>View All</Text>
    </View>
  )
}

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
  more: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: 200,
    borderColor: "#707070",
    borderRadius: 5,
    borderWidth: 1,
    marginRight: 10,
    backgroundColor: "#ffffff",
    overlayColor: "#ffffff",
    padding: 5,
    overflow: "hidden",
  },
  moreImage: {
    height: 50,
  },
  clubName: {
    fontWeight: "bold",
    color: "#707070",
    textTransform: "uppercase"
  }
});

export default MyClubsPreviewContainer;