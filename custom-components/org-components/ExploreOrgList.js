import React from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";

import OrgList from "./OrgList";

import { selectExploreSearchQuery, selectOrgsListForExploreSearch } from "./../../redux/orgs/orgsSelectors";

// TODO: display list of organisations based on category / search filter
// pass data to org list

const ExploreOrgList = () => {

  const query = useSelector(selectExploreSearchQuery);

  const data = useSelector(selectOrgsListForExploreSearch(query));

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{data.length} clubs & organisations</Text>
        <OrgList orgsListData={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 10,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 14,
    textTransform: "lowercase",
    marginBottom: 10,
  },
});

export default ExploreOrgList;