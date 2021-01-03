import React from "react";
import { useDispatch } from "react-redux";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Button } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

import ScreenHeader from "./../custom-components/ScreenHeader";
import ProfileSummary from "./../custom-components/ProfileSummary";
import MyOrgMemberships from "../custom-components/org-components/MyOrgMemberships";

import { logOutWithFirebase } from "./../redux/user/userActions";

// Home profile screen component
const Profile = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <ScreenHeader returnPage={false} title="Profile" />
      <ImageBackground
        source={require("./../assets/330ppi/stucco330x.png")}
        style={styles.bgImage}
      >
        <View style={styles.pageContent}>
          <ScrollView style={styles.scrollView}>
            <ProfileSummary />
            <MyOrgMemberships />
            <Button
              style={styles.logoutBtn}
              mode="outlined"
              onPress={() => dispatch(logOutWithFirebase())}
            >
              Log Out
            </Button>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bgImage: {
    flex: 1,
  },
  pageContent: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  scrollView: {
    width: "100%",
  },
  logoutBtn: {
    marginHorizontal: 10,
    marginVertical: 20,
    alignSelf: "stretch",
  },
});

export default Profile;
