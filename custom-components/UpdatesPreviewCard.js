import React from "react";
import { View, Image, StyleSheet } from "react-native";

// TODO: takes an image url and a url to Update page as props
const UpdatesPreviewCard = () => {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={require("./../assets/logo.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  },
  container: {
    borderColor: "#707070",
    borderRadius: 5,
    borderWidth: 1,
    marginRight: 10,
  }
});

export default UpdatesPreviewCard;