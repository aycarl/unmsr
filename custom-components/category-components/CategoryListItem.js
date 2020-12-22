import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CategoryListItem = ({item}) => {
  return (
    <View style={styles.container} >
      <Text style={styles.text} >{item.title}</Text>
    </View>
  );
}

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
  }
});

export default CategoryListItem;