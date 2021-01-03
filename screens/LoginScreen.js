import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { View, Image, StyleSheet, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

import { selectErrorMessage } from "./../redux/user/userSelectors";
import { logInWithFirebase } from "./../redux/user/userActions";

// Login Screen component
const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const userErrorMessage = useSelector(selectErrorMessage);
  const dispatch = useDispatch();

  const login = () => {

    // TODO validate email
    dispatch(logInWithFirebase(email, password));
  };

  return (  
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.logo} source={require("./../assets/logo.png")} />
      <TextInput
        label="Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
        mode="outlined"
        placeholder="enter unm email address"
        dense
      />
      <TextInput
        label="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(password) => setPassword(password)}
        mode="outlined"
        placeholder="enter password"
        dense
      />
      <Text style={styles.error}>{userErrorMessage}</Text>
      <Button mode="contained" onPress={login}>
        Log in
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("Signup", { email, password })}
      >
        Sign up
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingTop: 100,
    paddingBottom: 200,
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
  },
  error: {
    color: "#ba0c2f",
    alignSelf: "center",
    marginBottom: 15,
  },
});

export default LoginScreen;
