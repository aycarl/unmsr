import { createSelector } from "reselect";

const selectUser = state => state.user;

// select current user information
export const selectCurrentUserInfo = createSelector(
  [selectUser],
  user => user.currentUserInfo
);

// selects current user token
export const selectUserToken = createSelector(
  [selectUser],
  user => user.userToken
);

// selects error message
export const selectErrorMessage = createSelector(
  [selectUser],
  user => user.errorMessage
);

// selects current user ID
export const selectUserID = createSelector(
  [selectCurrentUserInfo],
  user => user.userID
);

// selects organisation membership list
export const selectOrgMembershipList = createSelector(
  [selectCurrentUserInfo],
  user => user.orgMembershipList
);

// returns boolean: checks if organisation is in membership list
export const selectIsInMembershipList = orgUID => createSelector(
  [selectOrgMembershipList],
  orgMembershipList => orgUID ? orgMembershipList.includes(orgUID) : false
);

// select user first name
export const selectFirstName = createSelector(
  [selectCurrentUserInfo],
  user => user.firstName
);

// select user last name
export const selectLastName = createSelector(
  [selectCurrentUserInfo],
  user => user.lastName
);

// select user email address
export const selectEmailAddress = createSelector(
  [selectCurrentUserInfo],
  user => user.emailAddress
);

// select user phone number
export const selectPhoneNumber = createSelector(
  [selectCurrentUserInfo],
  user => user.phoneNumber
);

// select user education level
export const selectEducationLevel = createSelector(
  [selectCurrentUserInfo],
  user => user.educationLevel
);