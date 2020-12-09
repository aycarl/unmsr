import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { ScrollView } from "react-native-gesture-handler";

import UpdatesPreviewCard from "./UpdatesPreviewCard";

// TODO: Takes a list of update objects
const UpdatesPreviewContainer = () => {
  return (
    <View style={styles.updates}>
      <Text style={styles.text}>UPDATES</Text>
      <ScrollView
        horizontal
        contentContainerStyle={styles.horizontalScrollView}
      >
        <UpdatesPreviewCard />
        <UpdatesPreviewCard />
        <UpdatesPreviewCard />
      </ScrollView>
      <Text style={styles.textLink}>View all updates</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  updates: {
    flex: 3,
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

export default UpdatesPreviewContainer;
