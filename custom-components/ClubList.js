import React from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import ClubListItem from "./ClubListItem";

const ClubList = () => {
  return (
    <View>
      <ScrollView>
        <ClubListItem />
        <ClubListItem />
        <ClubListItem />
        <ClubListItem />
        <ClubListItem />
        <ClubListItem />
      </ScrollView>
    </View>
  );
};

export default ClubList;