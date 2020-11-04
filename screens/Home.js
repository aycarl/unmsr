import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Button } from 'react-native-paper';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to UNM Student Resources!</Text>
      <StatusBar style="auto" />
      <Button
        mode="contained"
        onPress={() => { navigation.navigate("Auth", { screen: "Login"}); }}
        >Go to login page</Button>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;