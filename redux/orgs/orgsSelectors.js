import { createSelector } from "reselect";

const selectOrgs = state => state.orgs;

// select all organizations from state as object
export const selectOrgsList = createSelector(
  [selectOrgs],
  orgs => orgs.orgsList 
);

// select all organisations (UID, name & number of members) from state as array
export const selectOrgsListForPreview = createSelector(
  [selectOrgsList],
  orgsList => orgsList ? Object.keys(orgsList).map(orgUID => {
    const { UID, name, nickname, members } = orgsList[orgUID];
    return ({
      UID,
      name,
      nickname,
      memberCount: members.length,
    });
  }) : []
);

// TODO: create selector for list of organisation that a use is a part of!!!

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