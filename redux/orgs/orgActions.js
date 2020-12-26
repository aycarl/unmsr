import OrgActionTypes from "./orgActionTypes";

export const UpdatedExploreSearchQuery = query => ({
  type: OrgActionTypes.UPDATE_EXPLORE_SEARCH_QUERY,
  payload: query
});