import React from "react";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import CategoryListItem from "./CategoryListItem";

const CategoryList = () => {
  const DATA = [
    {
      id: "0",
      title: "recreation",
    },
    {
      id: "1",
      title: "sport",
    },
    {
      id: "2",
      title: "ASUNM",
    },
    {
      id: "4",
      title: "GPSA",
    },
    {
      id: "5",
      title: "religion",
    },
    {
      id: "6",
      title: "military",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={CategoryListItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    alignContent: "flex-start",
    flex: 0.85,
  },
});

export default CategoryList;
