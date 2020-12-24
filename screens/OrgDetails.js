import React from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { selectOrg } from "./../redux/orgs/orgsSelectors";
import EventsList from "../custom-components/event-components/EventsList";
import CategoryLabels from "./../custom-components/category-components/CategoryLabels";

// TODO: include category container styling and display
// TODO: add events list data for organization

const OrgDetails = () => {
  const org = useSelector(selectOrg("org1"));

  // console.log("org: "+ JSON.stringify(org["orgsList"]));
  console.log("org " + JSON.stringify(org));

  const memberCount = Object.keys(org.members).length;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.nameHeader}>{org.name}</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.description}>
            {org.about.summary ? org.about.summary : org.about.longDescription}
          </Text>
          <Text style={styles.memberCountContainer}>
            <Text style={styles.memberCount}>{memberCount}</Text>{" "}
            {memberCount > 1 ? `members` : `member`}
          </Text>
          <CategoryLabels data={org.categoryList} />
          <Text style={styles.sectionHeader}>Meeting Info</Text>
          <View style={styles.infoTable}>
            <View style={styles.infoLabels}>
              <Text style={styles.label}>Hours: </Text>
              <Text style={styles.label}>Days: </Text>
              <Text style={styles.label}>Venue: </Text>
            </View>
            <View style={styles.infoData}>
              <Text>{org.meetingInfo.meetingHours}</Text>
              <Text>{org.meetingInfo.meetingDays}</Text>
              <Text>{org.meetingInfo.meetingVenue}</Text>
            </View>
          </View>
          <Text style={styles.sectionHeader}>Events</Text>
          <EventsList data={org.eventsList} />
          <Text style={styles.sectionHeader}>org.membershipCriteria</Text>
          <Text style={styles.sectionHeader}>org.contactInfo</Text>
          <Text style={styles.sectionHeader}>org.leadershipInfo</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 5,
    height: 200,
    backgroundColor: "#D14081",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  nameHeader: {
    alignSelf: "flex-end",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: 10,
  },
  bodyContainer: {
    padding: 10,
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
  },
  memberCountContainer: {
    fontSize: 14,
    marginBottom: 10,
  },
  memberCount: {
    fontWeight: "bold",
  },
  infoTable: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoLabels: {
    flex: 1,
  },
  label: {
    fontWeight: "bold",
  },
  infoData: {
    flex: 4,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 5,
    marginTop: 10,
  },
});

export default OrgDetails;
