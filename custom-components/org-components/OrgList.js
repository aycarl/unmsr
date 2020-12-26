import React from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { selectOrgsListForPreview } from "./../../redux/orgs/orgsSelectors";

import OrgListItem from "./OrgListItem";

// render component for each item in flatlist
const renderItem = ({ item }) => <OrgListItem {...item} />;

// FIXME: only display data passed in as props NOT from selectOrgsListForPreview !!!

// displays list of organisations
const OrgList = ({orgsListData}) => {
  // const orgsListData = useSelector(selectOrgsListForPreview);
  return (
    <View style={styles.container}>
      <FlatList
        data={orgsListData}
        renderItem={renderItem}
        keyExtractor={(item) => item.UID}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default OrgList;
