import React from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import OrgPreviewCard from "./OrgPreviewCard";
import ExploreOrgs from "./ExploreOrgs";

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
});

export default OrgPreviewContainer;
