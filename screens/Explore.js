import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { View, ImageBackground } from "react-native";
import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

import CategoryListContainer from "./../custom-components/category-components/CategoryListContainer";
import ExploreOrgList from "./../custom-components/org-components/ExploreOrgList";

//import redux action to update search query in state
import { UpdatedExploreSearchQuery } from "./../redux/orgs/orgActions";

// select query from state
import { selectExploreSearchQuery } from "./../redux/orgs/orgsSelectors";

const Explore = () => {
  const dispatch = useDispatch();

  const searchQuery = useSelector(selectExploreSearchQuery);

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
              onChangeText={(query) =>
                dispatch(UpdatedExploreSearchQuery(query))
              }
              value={searchQuery}
            />
          </View>
          <View style={styles.exploreListSection}>
            {searchQuery === "" ? (
              <CategoryListContainer />
            ) : (
              <ExploreOrgList />
            )}
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
    // resizeMode: "cover",
  },
  pageContent: {
    flex: 1,
    paddingTop: 40,
  },
  searchContainer: {
    alignSelf: "stretch",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  sectionHeaderText: {
    alignSelf: "flex-start",
    marginVertical: 10,
    fontWeight: "bold",
    fontSize: 14,
    textTransform: "uppercase",
  },
  exploreListSection: {
    flex: 1,
    paddingBottom: 10,
  },
});

export default Explore;
