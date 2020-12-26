import React from "react";
import { View, StyleSheet, Text } from "react-native";

const CategoryLabels = ({data}) => {
  return (
    <View style={styles.container}>
      {
        data ? 
        data.map(
          category => <CategoryLabel key={category.id} title={category.title} />
        )
        : (<Text style={styles.label}>** no categories **</Text>)
      }
    </View>
  );
}

const CategoryLabel = ({title}) => (
  <View style={styles.labelContainer}>
    <Text style={styles.label}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent: "flex-start",
    flexWrap: "wrap",
    marginVertical: 10,
  },
  labelContainer: {
    marginRight: 5,
    marginBottom: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#EF798A"
  },
  label: {
    fontWeight: "bold",
  }
});

export default CategoryLabels;