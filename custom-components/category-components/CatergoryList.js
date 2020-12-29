import React from "react";
import { useSelector, connect } from "react-redux";

import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import CategoryListItem from "./CategoryListItem";

import { selectCategoryList } from "./../../redux/orgs/orgsSelectors";

// TODO: properly style category lists of space evenly

const CategoryList = () => {

  // select list of categories from redux state
  const categoryListData = useSelector(selectCategoryList);

  console.log("categories: "+categoryListData);

  const renderItem = item => (<CategoryListItem {...item} />);

  return (
    <View style={styles.container}>
      <FlatList
        data={categoryListData}
        renderItem={renderItem}
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
    alignContent: "stretch",
    flex: 1,
  },
  listContainer: {
    justifyContent: "space-between",
    alignContent: "space-between",
  },
});

export default CategoryList;
