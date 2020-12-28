import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";

import OrgPreviewCard from "./OrgPreviewCard";

import { selectOrgMembershipList } from "./../../redux/user/userSelectors";
import { selectOrgsListForUserMembership } from "./../../redux/orgs/orgsSelectors";

// render component for org preview card
const renderItem = ({ item }) => <OrgPreviewCard {...item} />;

const OrgPreviewContainer = () => {
  const membershipList = useSelector(selectOrgMembershipList);

  const orgMembershipData = useSelector(
    selectOrgsListForUserMembership(membershipList)
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Clubs & Organisations</Text>
      <View style={styles.myClubs}>
        {orgMembershipData.length > 0 ? (
          <FlatList
            horizontal
            data={orgMembershipData}
            renderItem={renderItem}
            keyExtractor={(item) => item.UID}
          />
        ) : (
          <ExploreOrgs />
        )}
      </View>
    </View>
  );
};

// component: explore organizations and connect!
const ExploreOrgs = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.more}>
      <Text style={styles.moreText}>Explore · Connect</Text>
      <Button mode="text" onPress={() => navigation.navigate("Explore")}>
        Find UNM Organizations & Clubs
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  myClubs: {
    flex: 1,
  },
  text: {
    fontWeight: "bold",
    marginBottom: 10,
    marginHorizontal: 10,
    textTransform: "uppercase",
  },
  more: {
    flex: 1,
    //flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderColor: "#707070",
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: "#ffffff",
    padding: 5,
    marginHorizontal: 10,
    overflow: "hidden",
  },
  moreText: {
    fontSize: 18,
    color: "#000",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  clubName: {
    fontWeight: "bold",
    color: "#707070",
    textTransform: "uppercase",
  },
});

export default OrgPreviewContainer;
