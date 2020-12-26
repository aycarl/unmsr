import UserActionTypes from "./userActionTypes";

// user action to edit/update user profile info
export const updatedUserProfile = userProfileData => ({
  action: UserActionTypes.UPDATE_USER_PROFILE,
  payload: userProfileData
});

// TODO: create action function to dispatch action to also add user from org member list
// user action to join an organization
export const joinOrg = orgUID => ({
  action: UserActionTypes.JOIN_ORG,
  payload: orgUID
});

// TODO: create action function to dispatch action to also remove user from org member list
// user action to leave an organization
export const leaveOrg = orgUID => ({
  action: UserActionTypes.LEAVE_ORG,
  payload: orgUID
});

// user action to sign up / create an account
// auth info: email, password, createdAt, logInTimestamp, user token, userID
export const signUp = userAuthInfo => ({
  action: UserActionTypes.SIGN_UP,
  payload: userAuthInfo
});

// user action to log in
// auth information: email, password, user token, logInTimestamp, userID
export const logIn = userAuthInfo => ({
  action: UserActionTypes.LOG_IN,
  payload: userAuthInfo
});

// user action to log out
// TODO: include an event/action dispatch to clear localStorage/AsyncStorage
export const logOut = () => ({
  action: UserActionTypes.LOG_OUT,
});