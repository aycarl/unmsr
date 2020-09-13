import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button } from 'react-native';
import { StyleSheet } from 'react-native';

export const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This will hold the app settings</Text>
      <StatusBar style="auto" />
      <Button
        onPress={() => { navigation.navigate("Home"); }}
        title="Go to home page" />
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