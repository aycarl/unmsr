import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { View, Image, StyleSheet, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

import { signUpWithFirebase, signUpFailure } from "./../redux/user/userActions";
import { selectErrorMessage } from "./../redux/user/userSelectors";

const SignupScreen = ({ route }) => {
  const navigation = useNavigation();

  const [email, setEmail] = React.useState(route.params.email);
  const [password, setPassword] = React.useState(route.params.password);
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  let userErrorMessage = useSelector(selectErrorMessage);

  const dispatch = useDispatch();

  const signup = () => {
    
    if (password !== confirmPassword) {
      dispatch(signUpFailure("Passwords did not match!"));
      return;
    }

    if (email === "") {
      dispatch(signUpFailure("Email is required!"));
      return;
    }

    // TODO: validate email with regex

    if (email && password) {
      dispatch(signUpWithFirebase(email, password, firstName, lastName));
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.logo} source={require("./../assets/logo.png")} />
      <TextInput
        label="First name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
        mode="outlined"
        placeholder="enter first name"
        dense
      />
      <TextInput
        label="Last name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
        mode="outlined"
        placeholder="enter last name"
        dense
      />
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
      <TextInput
        label="Confirm Password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={(password) => setConfirmPassword(password)}
        mode="outlined"
        placeholder="enter password"
        dense
      />
      <Text style={styles.error}>{userErrorMessage}</Text>
      <Button mode="contained" onPress={signup}>
        Sign up
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("Login")}
      >
        I already have an account.
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 150,
    paddingHorizontal: 20,
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
  error: {
    color: "#ba0c2f",
    alignSelf: "center",
    marginBottom: 15,
  },
});

export default SignupScreen;
