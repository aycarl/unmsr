import { addMember, removeMember } from "../orgs/orgsActions";
import UserActionTypes from "./userActionTypes";

// firebase
import { auth, createUserProfileDocument, loadUserProfileDocument } from "./../../utils/firebaseUtils";

// user action to join an organization
export const joinOrg = (orgUID) => ({
  type: UserActionTypes.JOIN_ORG,
  payload: orgUID,
});

// user action to leave an organization
export const leaveOrg = (orgUID) => ({
  type: UserActionTypes.LEAVE_ORG,
  payload: orgUID,
});

// user action to sign up / create an account
// auth info: email, password, createdAt, logInTimestamp, user token, userID
export const signUp = (userID) => ({
  type: UserActionTypes.SIGN_UP,
  payload: userID,
});

export const signUpFailure = (errorMessage) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: errorMessage,
});

// TODO: create action to dispatch login & load all other user info: membership list, demographics
// user action to log in
// auth information: email, password, user token, logInTimestamp, userID
export const logIn = (userID) => ({
  type: UserActionTypes.LOG_IN,
  payload: userID,
});

export const logInFailure = (errorMessage) => ({
  type: UserActionTypes.LOG_IN_FAILURE,
  payload: errorMessage,
});

// user action to log out
// TODO: include an event/action dispatch to clear localStorage/AsyncStorage
export const logOut = () => ({
  type: UserActionTypes.LOG_OUT,
});

// user action to load user profile info from firebase into state
export const loadUserProfile = (userProfileData) => ({
  type: UserActionTypes.LOAD_USER_PROFILE,
  payload: userProfileData
});

// user action to edit/update user profile info
export const updatedUserProfile = (userProfileData) => ({
  type: UserActionTypes.UPDATE_USER_PROFILE,
  payload: userProfileData,
});

// DISPATCH FUNCTIONS

// dispatch action to also add user from org member list
// TODO: integrate firebase to reflect changes
export const currentUserJoinsOrg = (membershipInfo) => {
  return (dispatch) => {
    console.log("membership infor: " + JSON.stringify(membershipInfo));

    const { orgUID } = membershipInfo;

    // add org to user list of organization memberships
    dispatch(joinOrg(orgUID));

    // add user to org membership list
    dispatch(addMember(membershipInfo));
  };
};

// dispatch action to also remove user from org member list
// TODO: integrate firebase to reflect changes
export const currentUserLeavesOrg = (membershipInfo) => {
  return (dispatch) => {
    console.log("membership infor: " + JSON.stringify(membershipInfo));

    const { orgUID } = membershipInfo;

    // add org to user list of organization memberships
    dispatch(leaveOrg(orgUID));

    // add user to org membership list
    dispatch(removeMember(membershipInfo));
  };
};

// firebase sign up
// TODO: add create profile function for new users
// FIXME: use actual randomly generated user token instead of user uid
export const signUpWithFirebase = (email, password, firstName, lastName) => {
  return async (dispatch) => {
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        //console.log("firebase create account: " + JSON.stringify(data));

        // create user profile in firebase
        const createdAt = new Date();
        const userProfileData = {
          email,
          firstName,
          lastName,
          createdAt,
          logInTimestamp: createdAt,
          orgMembershipList: ["unmsr",],
          userID: data.user.uid
        };

        createUserProfileDocument(data.user, userProfileData);

        dispatch(signUp(data.user.uid));
        dispatch(loadUserProfile(userProfileData));
      })
      .catch((error) => dispatch(signUpFailure(error.message)));
  };
};

// firebase log in
// TODO: add load profile function for new users
export const logInWithFirebase = (email, password) => {
  return async (dispatch) => {
    await auth
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        //console.log("firebase log in: " + JSON.stringify(user));

        loadUserProfileDocument(data.user.uid).then(
          data => dispatch(loadUserProfile(data))
        );

        dispatch(logIn(data.user.uid));
      })
      .catch((error) => dispatch(logInFailure(error.message)));
  };
};

// firebase log out
export const logOutWithFirebase = () => {
  return async (dispatch) => {
    await auth.signOut().then(() => dispatch(logOut()));
  };
};
