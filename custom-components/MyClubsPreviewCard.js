import React from "react";
import { View, Image, StyleSheet, Text, ImageBackground } from "react-native";

// TODO: takes an image url and a url to Update page as props
const MyClubsPreviewCard = () => {
  return (
    <View>
      <ImageBackground 
        style={styles.image}
        source={require("./../assets/img/anime_club.jpg")}
      >
        <Text style={styles.clubName} >ANIME CLUB</Text>
      </ImageBackground>
    </View>
  );
}

// TODO: add gradient overlay to make clube names stand out

const styles = StyleSheet.create({
  image: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    resizeMode: "contain",
    width: 200,
    borderColor: "#707070",
    borderRadius: 5,
    borderWidth: 1,
    marginRight: 10,
    backgroundColor: "#ffffff",
    overlayColor: "#ffffff",
    padding: 5,
    overflow: "hidden",
  },
  clubName: {
    fontWeight: "bold",
    color: "#ffffff",
  }
});

export default MyClubsPreviewCard;