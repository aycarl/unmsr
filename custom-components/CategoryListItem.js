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
    height: 50,
    width: 150,
    borderWidth: 1,
    borderRadius: 5,
    alignContent: "center",
    justifyContent: "center",
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  }
});

export default CategoryListItem;