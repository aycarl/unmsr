import React from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";

import OrgList from "./OrgList";

import { selectOrgMembershipList } from "./../../redux/user/userSelectors";
import { selectOrgsListForUserMembership } from "./../../redux/orgs/orgsSelectors";

// displays organizationts that a user is a member of
const MyOrgMemberships = () => {

  const membershipList = useSelector(selectOrgMembershipList);

  const orgMembershipData = useSelector(selectOrgsListForUserMembership(membershipList));

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Memberships</Text>
        <OrgList orgsListData={orgMembershipData} />
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
    fontSize: 14,
    textTransform: "uppercase",
    marginBottom: 10,
  },
});

export default MyOrgMemberships;