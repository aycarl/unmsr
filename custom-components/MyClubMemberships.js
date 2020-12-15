import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import NotificationItem from "./../custom-components/NotificationItem";

const MyClubMemberships = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.headerText}>Memberships</Text>
        <NotificationItem />
      </ScrollView>
    </View>
  );
}

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
  }
});

export default MyClubMemberships;