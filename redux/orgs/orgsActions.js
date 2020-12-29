import OrgsActionTypes from "./orgsActionTypes";

// explore action to search organisation list
export const updatedExploreSearchQuery = query => ({
  type: OrgsActionTypes.UPDATE_EXPLORE_SEARCH_QUERY,
  payload: query
});

// org action to remove user from org member list
export const removeMember = membershipInfo => ({
  type: OrgsActionTypes.REMOVE_MEMBER,
  payload: membershipInfo
});

// org action to add user to member list
export const addMember = membershipInfo => ({
  type: OrgsActionTypes.ADD_NEW_MEMBER,
  payload: membershipInfo
});