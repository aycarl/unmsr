import OrgActionTypes from "./orgActionTypes";

// explore action to search organisation list
export const updatedExploreSearchQuery = query => ({
  type: OrgActionTypes.UPDATE_EXPLORE_SEARCH_QUERY,
  payload: query
});

// org action to remove user from org member list
export const removeMember = userID => ({
  type: OrgActionTypes.REMOVE_MEMBER,
  payload: userID
});

// org actiont to add user to member list
export const addMember = userID => ({
  type: OrgActionTypes.ADD_NEW_MEMBER,
  payload: userID
});