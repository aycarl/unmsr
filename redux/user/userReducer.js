import UserActionTypes from "./userActionTypes";
import { addOrgToMembershipList, removeOrgFromMembershipList } from "./userUtils";

// FIXME: edit user state - change to only needed items
const INITIAL_STATE = {
  userToken: "",
  userID: "",
  emailAddress: "",
  password: "",
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