import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

// TODO: remember to make member count dynamic
// TODO: include touchable component for linking to details page

const OrgListItem = ({ name, nickname, UID, memberCount }) => {
  return (
    <View style={styles.container}>
      <View style={styles.clubLogoContainer}></View>
      <View style={styles.textContainer}>
        <Text style={styles.clubName}>{name}</Text>
        <Text style={styles.clubNickname}>{nickname}</Text>
        <Text style={styles.memberCount}>
          {memberCount} {memberCount > 1 ? `members` : `member`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 10,
  },
  clubLogoContainer: {
    width: 75,
    height: 75,
    backgroundColor: "#ba0c2f",
    marginRight: 10,
  },
  textContainer: {
    justifyContent: "space-around",
  },
  clubName: {
    fontSize: 15,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  clubNickname: {
    fontSize: 14,
  },
});

export default OrgListItem;
