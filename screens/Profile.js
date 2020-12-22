import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

import ScreenHeader from "./../custom-components/ScreenHeader";
import ProfileSummary from "./../custom-components/ProfileSummary";
import MyOrgMemberships from "../custom-components/OrgItems/MyOrgMemberships";

const Profile = () => {
  return (
    <View style={styles.container}>
      <ScreenHeader returnPage={false} title="Profile" />
      <ImageBackground
        source={require("./../assets/330ppi/stucco330x.png")}
        style={styles.bgImage}
        >
        <View style={styles.pageContent}>
          <ProfileSummary />
          <MyOrgMemberships />
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
});

export default Profile;
