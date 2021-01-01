import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { View, Image, StyleSheet, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

import { signUpWithFirebase, logOutWithFirebase } from "./../redux/user/userActions";
import { selectErrorMessage } from "./../redux/user/userSelectors";

const SignupScreen = ({ route }) => {
  const navigation = useNavigation();

  const [email, setEmail] = React.useState(route.params.email);
  const [password, setPassword] = React.useState(route.params.password);
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const userErrorMessage = useSelector(selectErrorMessage);

  const dispatch = useDispatch();

  const signup = () => {
    
    if (password !== confirmPassword) {
      selectErrorMessage("Passwords did not match!")
      return;
    }

    if (userErrorMessage) {
      setErrorMessage(userErrorMessage);
      return;
    }

    // TODO: validate email with regex

    if (email && password) {
      dispatch(signUpWithFirebase(email, password));
    }
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
      />
      <TextInput
        label="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(password) => setPassword(password)}
        mode="outlined"
        placeholder="enter password"
      />
      <TextInput
        label="Confirm Password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={(password) => setConfirmPassword(password)}
        mode="outlined"
        placeholder="enter password"
      />
      <Text>{errorMessage}</Text>
      <Button mode="contained" onPress={signup}>
        Sign up
      </Button>
      <Button mode="contained" onPress={() => dispatch(logOutWithFirebase())}>
        Log Out
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 150,
    padding: 20,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
  },
});

export default SignupScreen;
