import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

// TODO: takes an image url and a url to Update page as props
const EventPreviewCard = () => {
  return (
    <View>
      <ImageBackground 
        style={styles.image}
        source={require("./../../assets/updates/PNMGC_Notice.png")}
      ></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: 300,
    // resizeMode: "contain",
    borderColor: "#707070",
    borderRadius: 5,
    borderWidth: 1,
    marginRight: 10,
    overflow: "hidden",
  },
});

export default EventPreviewCard;