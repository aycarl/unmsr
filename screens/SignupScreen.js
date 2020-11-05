import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

const SignupScreen = ({ navigation, route }) => {
  const [email, setEmail] = React.useState(route.params.email);
  const [password, setPassword] = React.useState(route.params.password);
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const signup = () => {
    if (password === confirmPassword) {
      navigation.navigate("HomeNav");
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
      <Button mode="contained" onPress={signup}>
        Sign up
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 100,
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
