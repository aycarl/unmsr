import { addMember, removeMember } from "../orgs/orgsActions";
import UserActionTypes from "./userActionTypes";

// user action to edit/update user profile info
export const updatedUserProfile = userProfileData => ({
  type: UserActionTypes.UPDATE_USER_PROFILE,
  payload: userProfileData
});

// user action to join an organization
export const joinOrg = orgUID => ({
  type: UserActionTypes.JOIN_ORG,
  payload: orgUID
});

// user action to leave an organization
export const leaveOrg = orgUID => ({
  type: UserActionTypes.LEAVE_ORG,
  payload: orgUID
});

// user action to sign up / create an account
// auth info: email, password, createdAt, logInTimestamp, user token, userID
export const signUp = userAuthInfo => ({
  type: UserActionTypes.SIGN_UP,
  payload: userAuthInfo
});

// TODO: create action to dispatch login & load all other user info: membership list, demographics
// user action to log in
// auth information: email, password, user token, logInTimestamp, userID
export const logIn = userAuthInfo => ({
  type: UserActionTypes.LOG_IN,
  payload: userAuthInfo
});

// user action to log out
// TODO: include an event/action dispatch to clear localStorage/AsyncStorage
export const logOut = () => ({
  type: UserActionTypes.LOG_OUT,
});

// DISPATCH FUNCTIONS

// TODO: create action function to dispatch action to also add user from org member list
export const currentUserJoinsOrg = membershipInfo => {
  return (dispatch) => {

    console.log("membership infor: "+ JSON.stringify(membershipInfo));

    const { orgUID } = membershipInfo;
    
    // add org to user list of organization memberships
    dispatch(joinOrg(orgUID));

    // add user to org membership list
    dispatch(addMember(membershipInfo));
  }
}

// TODO: create action function to dispatch action to also remove user from org member list
export const currentUserLeavesOrg = membershipInfo => {
  return (dispatch) => {

    console.log("membership infor: "+ JSON.stringify(membershipInfo));

    const { orgUID } = membershipInfo;
    
    // add org to user list of organization memberships
    dispatch(leaveOrg(orgUID));

    // add user to org membership list
    dispatch(removeMember(membershipInfo));
  }
}