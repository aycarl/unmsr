import { createSelector } from "reselect";
import { selectCategoryList } from "../orgs/orgsSelectors";

const selectUser = state => state.user;

// selects current user ID
export const selectUserID = createSelector(
  [user],
  user => user.userID
);

// selects current user token
export const selectUserToken = createSelector(
  [user],
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
  orgMembershipList => orgMembershipList ? orgMembershipList.includes(orgUID) : false
);