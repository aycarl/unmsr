import React from "react";
import { View, Text, StyleSheet } from "react-native";

import CategoryList from "./CatergoryList";

// displays list of categories in two columns
const CategoryListContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Explore by Category</Text>
      <CategoryList />
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
    marginBottom: 10,
  },
});

export default CategoryListContainer;
