import React from "react";
import { StatusBar } from "expo-status-bar";

import { Text, View, Button } from "react-native";
import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

import CategoryList from "./../custom-components/CatergoryList";

const Explore = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search Clubs & Organisations"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <Text style={styles.sectionHeaderText}>Explore by Category</Text>
      </View>
      <CategoryList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 30,
  },
  searchContainer: {
    flex: 0.15,
    alignSelf: "stretch",
  },
  sectionHeaderText: {
    alignSelf: "flex-start",
    marginVertical: 15,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Explore;
