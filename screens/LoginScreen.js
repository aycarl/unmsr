import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container} >
      <Image 
        style={styles.logo}
        source={require('./../assets/logo.png')}
      />
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
      <Button mode="contained" >Log in</Button>
      <Button mode="text" onPress={() => navigation.navigate('Signup')} >Sign up</Button>
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
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
  }
});

export default LoginScreen;
