import { createSelector } from "reselect";

const selectUser = state => state.user;

// selects current user ID
export const selectUserID = createSelector(
  [selectUser],
  user => user.userID
);

// selects current user token
export const selectUserToken = createSelector(
  [selectUser],
  user => user.userToken
);

// selects organisation membership list
export const selectOrgMembershipList = createSelector(
  [selectUser],
  user => user.orgMembershipList
);

// returns boolean: checks if organisation is in membership list
export const selectIsInMembershipList = orgUID => createSelector(
  [selectOrgMembershipList],
  orgMembershipList => orgUID ? orgMembershipList.includes(orgUID) : false
);