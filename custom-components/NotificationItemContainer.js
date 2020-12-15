import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import NotificationItem from "./NotificationItem";

const NotificationItemContainer = () => {
  return (
    <View style={styles.notificationContainer}>
      {/* TODO: add monthly sections / categories */}
      {/* <Text style={styles.text}>This Month</Text> */}
      <ScrollView contentContainerStyle={styles.notificationsScroll} >
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  notificationContainer: {
    flex: 1,
    width: "100%",
  },
  text: {
    fontWeight: "bold",
    paddingBottom: 10,
    textTransform: "uppercase",
  },
  notificationsScroll: {
    paddingBottom: 10,
  },
  moreImage: {
    height: 50,
  },
});

export default NotificationItemContainer;