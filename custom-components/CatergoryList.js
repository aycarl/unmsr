import React from "react";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import CategoryListItem from "./CategoryListItem";

import CategoryListData from "./../mock-data/category-list-data"

// TODO: properly style category lists of space evenly

const CategoryList = () => {

  return (
    <View style={styles.container}>
      <FlatList
        data={CategoryListData}
        renderItem={CategoryListItem}
        keyExtractor={(item) => item.id}
        horizontal={false}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "flex-start",
    flex: 0.85,
  },
  listContainer: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-around",
    alignContent: "space-between",
  },
});

export default CategoryList;
