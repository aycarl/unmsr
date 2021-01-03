import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, ImageBackground } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

// TODO: takes an image url and a url to Update page as props
const OrgPreviewCard = ({ name, nickname, UID }) => {
  const navigation = useNavigation();
  
  // image randomizer for organization preview card
  const image = { uri: "https://picsum.photos/300/400" }

  return (
    <TouchableHighlight
      style={styles.container}
      activeOpacity={0.8}
      underlayColor="#fff"
      onPress={() => {
        navigation.navigate("OrgDetails", {
          orgID: UID,
        });
      }}
    >
      <ImageBackground
        style={styles.image}
        source={image}
      >
        <LinearGradient
          style={styles.linearGradient}
          colors={[
            "transparent",
            "transparent",
            "rgba(0,0,0,0.8)",
          ]}
        >
          <Text
            style={styles.clubName}
            numberOfLines={1}
            ellipsizeMode={"tail"}
          >
            {name} ({nickname})
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableHighlight>
  );
};

// TODO: add gradient overlay to make clube names stand out

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#707070",
    marginHorizontal: 10,
    backgroundColor: "#ffffff",
    width: 200,
    alignItems: "stretch",
    overflow: "hidden",
  },
  image: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    padding: 5,
    flexDirection: "row",
  },
  clubName: {
    fontWeight: "bold",
    color: "#ffffff",
    alignSelf: "flex-end",
  },
});

export default OrgPreviewCard;
