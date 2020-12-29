import React from "react";
import { useDispatch } from "react-redux";
import { StyleSheet, Text, TouchableHighlight } from "react-native";

import { updatedExploreSearchQuery } from "./../../redux/orgs/orgsActions";

// displays single category
// onPress: changes explore query string to category title
const CategoryListItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <TouchableHighlight
      activeOpacity={0.8}
      underlayColor="#fff"
      onPress={() => dispatch(updatedExploreSearchQuery(item.title))}
      style={styles.container}
    >
      <Text style={styles.text}>{item.title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    alignContent: "center",
    justifyContent: "center",
    marginVertical: 5,
    marginHorizontal: 3,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default CategoryListItem;
