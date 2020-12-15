import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ClubList from "./../custom-components/ClubList";

const MyClubMemberships = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Memberships</Text>
        <ClubList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    width: "100%",
    paddingHorizontal: 10,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
    marginBottom: 10,
  },
});

export default MyClubMemberships;