import UserActionTypes from "./userActionTypes";
import { addOrgToMembershipList, removeOrgFromMembershipList } from "./userUtils";

// FIXME: edit user state - change to only needed items
const INITIAL_STATE = {
  userToken: "alexis1234567890",
  userID: "alexis",
  emailAddress: "alexis@unm.edu",
  password: "1234567890",
  createdAt: "",
  logInTimestamp: "",
  orgMembershipList: []
};

// TODO: add auth-related reducers

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.JOIN_ORG:
      return {
        ...state,
        orgMembershipList: addOrgToMembershipList(state.orgMembershipList, action.payload)
      };

    case UserActionTypes.LEAVE_ORG:
      return {
        ...state,
        orgMembershipList: removeOrgFromMembershipList(state.orgMembershipList, action.payload)
      }
  
    default:
      return state;
  }
}

export default userReducer;