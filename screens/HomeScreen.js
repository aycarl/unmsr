import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Button } from 'react-native-paper';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to UNM Student Resources!</Text>
      <StatusBar style="auto" />
      <Button
        mode="contained"
        onPress={() => { navigation.navigate("Settings"); }}
        >Go to settings page</Button>
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