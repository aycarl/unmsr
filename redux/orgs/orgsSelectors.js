import { createSelector } from "reselect";

const selectOrgs = state => state.orgs;

// selects all organizations from state as object
export const selectOrgsList = createSelector(
  [selectOrgs],
  orgs => orgs.orgsList 
);

// selects all organisations (UID, name, categories & member count) from state as array
export const selectOrgsListForPreview = createSelector(
  [selectOrgsList],
  orgsList => orgsList ? Object.keys(orgsList).map(orgUID => {
    const { UID, name, nickname, members, categoryList } = orgsList[orgUID];
    return ({
      UID,
      name,
      nickname,
      memberCount: members.length,
      categories: categoryList.map(category => category.title),
    });
  }) : []
);

// selects a filtered list of organisations based on query (text or categories)
export const selectOrgsListForExploreSearch = query => createSelector(
  [selectOrgsListForPreview],
  orgsList => orgsList ? orgsList.filter(org => org.name
    .concat(" ", org.nickname, org.categories.toString())
    .toLowerCase()
    .includes(query.toLowerCase())) : []
);

// selects list of organisation that a user is a part of!!!
export const selectOrgsListForUserMembership = membershipList => createSelector(
  [selectOrgsListForPreview],
  orgsList => membershipList ? orgsList.filter(
    org => membershipList.includes(org.UID)
  ) : []
);

// selects the list of organization categories from state
export const selectCategoryList = createSelector(
  [selectOrgs],
  orgs => orgs.orgCategoryList
);

// selects an organization with orgUID from state
export const selectOrg = orgUID => createSelector(
  [selectOrgsList],
  orgsList => orgsList[orgUID]
);

// selects the exploreSearchQuery from state
export const selectExploreSearchQuery = createSelector(
  [selectOrgs],
  orgs => orgs.exploreSearchQuery
);