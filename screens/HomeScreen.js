import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button } from 'react-native';
import { StyleSheet } from 'react-native';

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to UNM Student Resources!</Text>
      <StatusBar style="auto" />
      <Button
        onPress={() => { navigation.navigate("Settings"); }}
        title="Go to settings page" />
    </View>
  );
};


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});