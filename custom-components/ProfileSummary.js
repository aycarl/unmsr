import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// TODO: add edit icon to edit profile information

const ProfileSummary = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profilePic} >
        <Image 
          style={styles.profileImage}
          source={require("./../assets/img/profile_img.jpg")}
        />
      </View>
      <View style={styles.profileText}>
        <Text style={styles.userName} >Lexis</Text>
        <Text style={styles.userEducationalLevel} >Graduate Student</Text>
        <Text style={styles.userEmailAddress} >alexis@unm.edu</Text>
        <Text style={styles.userPhoneNumber} >(505) XXX - XXXX</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
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
  }
});

export default ProfileSummary;