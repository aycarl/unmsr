import { createSelector } from "reselect";

const selectOrgs = state => state.orgs;

export const selectOrgsList = createSelector(
  [selectOrgs],
  orgs => orgs.orgsList 
);

export const selectCategoryList = createSelector(
  [selectOrgs],
  orgs => orgs.orgCategoryList
);