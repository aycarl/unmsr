import React from "react";

import { Text, View, ImageBackground } from "react-native";
import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

import CategoryList from "./../custom-components/CatergoryList";

const Explore = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./../assets/330ppi/stucco330x.png")}
        style={styles.bgImage}
      >
        <View style={styles.pageContent}>
          <View style={styles.searchContainer}>
            <Searchbar
              placeholder="Search Clubs & Organisations"
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
            <Text style={styles.sectionHeaderText}>Explore by Category</Text>
          </View>
          <View style={styles.categoryListSection}>
            <CategoryList />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
  },
  pageContent: {
    flex: 1,
    paddingTop: 35,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  searchContainer: {
    alignSelf: "stretch",
  },
  sectionHeaderText: {
    alignSelf: "flex-start",
    marginVertical: 10,
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
  },
  categoryListSection: {
    flex: 1,
  },
});

export default Explore;
