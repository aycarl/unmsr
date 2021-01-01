import UserActionTypes from "./userActionTypes";
import {
  addOrgToMembershipList,
  removeOrgFromMembershipList,
} from "./userUtils";

// FIXME: edit user state - change to only needed items
const INITIAL_STATE = {
  userToken: null,
  currentUserInfo: {
    userID: "alexis",
    emailAddress: "alexis@unm.edu",
    password: "1234567890",
    firstName: "Lexis",
    lastName: "A.",
    phoneNumber: "(505) 123-4567",
    educationLevel: "Graduate",
    createdAt: "",
    logInTimestamp: "",
    orgMembershipList: [],
  },
  errorMessage: null,
};

// TODO: add auth-related reducers

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_UP:
    case UserActionTypes.LOG_IN:
      return {
        ...state,
        userToken: action.payload,
        errorMessage: null,
      };
    case UserActionTypes.SIGN_UP_FAILURE:
    case UserActionTypes.LOG_IN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case UserActionTypes.LOG_OUT:
      return {
        ...state,
        userToken: null,
        userID: "",
        emailAddress: "",
        password: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        educationLevel: "",
        createdAt: "",
        logInTimestamp: "",
        orgMembershipList: [],
        error: null,
      };
    case UserActionTypes.JOIN_ORG:
      return {
        ...state,
        orgMembershipList: addOrgToMembershipList(
          state.orgMembershipList,
          action.payload
        ),
      };

    case UserActionTypes.LEAVE_ORG:
      return {
        ...state,
        orgMembershipList: removeOrgFromMembershipList(
          state.orgMembershipList,
          action.payload
        ),
      };

    default:
      return state;
  }
};

export default userReducer;
