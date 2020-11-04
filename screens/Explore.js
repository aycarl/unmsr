import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button } from 'react-native';
import { StyleSheet } from 'react-native';

const Explore = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Search & Explore</Text>
      <StatusBar style="auto" />
      <Button
        onPress={() => { navigation.navigate("Home"); }}
        title="Go to home page" />
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

export default Explore;