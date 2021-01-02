import UserActionTypes from "./userActionTypes";
import {
  addOrgToMembershipList,
  removeOrgFromMembershipList,
  loadUserProfileToState,
} from "./userUtils";

// FIXME: edit user state - change to only needed items
const INITIAL_STATE = {
  userToken: null,
  currentUserData: {
    userID: "",
    email: "",
    firstName: "",
    lastName: "",
    createdAt: "",
    logInTimestamps: [],
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
        currentUserData: null,
        error: null,
      };
    case UserActionTypes.LOAD_USER_PROFILE:
      return loadUserProfileToState(state, action.payload);
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
