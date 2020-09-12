import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to UNM Student Resources!</Text>
      <StatusBar style="auto" />
      <Button 
        onPress={() => {navigation.navigate("Settings")}}
        title="Go to settings page"
      />
    </View>
  );
}

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This will hold the app settings</Text>
      <StatusBar style="auto" />
      <Button 
        onPress={() => {navigation.navigate("Home")}}
        title="Go to home page"
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
