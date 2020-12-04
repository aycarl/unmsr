import React from "react";
import { StatusBar } from "expo-status-bar";

import { Button } from "react-native-paper";
import { ImageBackground, Text, View } from "react-native";
import { StyleSheet } from "react-native";

const bgImage = { uri: "./../assets/stucco.png" };

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./../assets/330ppi/stucco330x.png")} style={styles.bgImage}>
        <Text>Welcome to UNM Student Resources!</Text>
        <StatusBar style="auto" />
        <Button
          mode="contained"
          onPress={() => {
            navigation.navigate("Auth", { screen: "Login" });
          }}
        >
          Go to login page
        </Button>
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
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Home;
