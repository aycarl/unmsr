import React from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet, Image } from "react-native";

import {
  selectFirstName,
  selectLastName,
  selectEmailAddress,
} from "./../redux/user/userSelectors";

// TODO: add edit icon to edit profile information
// TODO: include other personal information?

// User Profile summary component
const ProfileSummary = () => {
  const firstName = useSelector(selectFirstName);
  const lastName = useSelector(selectLastName);
  const emailAddress = useSelector(selectEmailAddress);
  // const phoneNumber = useSelector(selectPhoneNumber);
  // const educationalLevel = useSelector(selectEducationLevel);
  // <Text style={styles.userEducationalLevel} >{educationalLevel}</Text>
  // <Text style={styles.userPhoneNumber} >{phoneNumber}</Text>

  return (
    <View style={styles.container}>
      <View style={styles.profilePic}>
        <Image
          style={styles.profileImage}
          source={require("./../assets/img/profile_img.jpg")}
        />
      </View>
      <View style={styles.profileText}>
        <Text style={styles.displayName}>
          {firstName} {lastName}
        </Text>
        <Text style={styles.userEmailAddress}>{emailAddress}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#fff",
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 10,
    elevation: 2,
  },
  profilePic: {
    width: 85,
    height: 85,
    backgroundColor: "#ba0c2f",
    borderRadius: 100,
    marginRight: 20,
  },
  profileImage: {
    width: 85,
    height: 85,
    borderRadius: 100,
    resizeMode: "cover",
    overflow: "hidden",
  },
  profileText: {
    height: 85,
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  displayName: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  userEducationalLevel: {
    fontSize: 14,
  },
  userEmailAddress: {
    color: "#ba0c2f",
    fontSize: 14,
  },
  userPhoneNumber: {
    fontSize: 14,
  },
});

export default ProfileSummary;
