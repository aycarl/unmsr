import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

import { selectUserID } from "./../../redux/user/userSelectors";
import {
  currentUserJoinsOrg,
  currentUserLeavesOrg,
} from "./../../redux/user/userActions";

// floating action button to join an organization
export const JoinOrgFAB = ({ orgUID }) => {
  const userID = useSelector(selectUserID);

  const membershipInfo = {
    orgUID,
    userID,
  };

  const dispatch = useDispatch();

  return (
    <FAB
      style={styles.fab}
      small
      label="Join"
      onPress={() => {
        console.log("FAB Join pressed: " + orgUID);
        dispatch(currentUserJoinsOrg(membershipInfo));
      }}
    />
  );
};

// floating action button to leave an organization
export const LeaveOrgFAB = ({ orgUID }) => {
  const userID = useSelector(selectUserID);

  const membershipInfo = {
    orgUID,
    userID,
  };

  const dispatch = useDispatch();

  return (
    <FAB
      style={styles.fab}
      small
      label="Leave"
      onPress={() => {
        console.log("FAB Leave pressed: " + orgUID);
        dispatch(currentUserLeavesOrg(membershipInfo))
      }}
    />
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0,
    backgroundColor: "#D14081",
  },
});
