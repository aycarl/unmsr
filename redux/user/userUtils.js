
// utils function to add an org to user membership list
export const addOrgToMembershipList = (orgMembershipList, orgUID) => {

  if (orgMembershipList.includes(orgUID)) {
    return orgMembershipList;
  }

  return orgUID
  ? [ ...orgMembershipList, orgUID ]
  : orgMembershipList
};

// utils function to remove an org from user membership list
export const removeOrgFromMembershipList = (orgMembershipList, orgUID) => {
  return orgMembershipList.filter(org => org !== orgUID)
}