import { createSelector } from "reselect";

const selectOrgs = state => state.orgs;

// select the list of organizations from state
export const selectOrgsList = createSelector(
  [selectOrgs],
  orgs => orgs.orgsList 
);

// select the list of organization categories from state
export const selectCategoryList = createSelector(
  [selectOrgs],
  orgs => orgs.orgCategoryList
);

// select an organization with orgUID from state
export const selectOrg = orgUID => createSelector(
  [selectOrgsList],
  orgsList => orgsList[orgUID]
);

// select the exploreSearchQuery from state
export const selectExploreSearchQuery = createSelector(
  [selectOrgs],
  orgs => orgs.exploreSearchQuery
);