// utils function to add an org to user membership list
export const addOrgToMembershipList = (orgMembershipList, orgUID) => {
  if (orgMembershipList.includes(orgUID)) {
    return orgMembershipList;
  }

  return orgUID ? [...orgMembershipList, orgUID] : orgMembershipList;
};

// utils function to remove an org from user membership list
export const removeOrgFromMembershipList = (orgMembershipList, orgUID) => {
  return orgMembershipList.filter((org) => org !== orgUID);
};

// utils function to add user profile userData
export const loadUserProfileToState = (state, userData) => {
  return userData
    ? {
        ...state,
        currentUserData: {
          userID: userData.userID,
          email: userData.email,
          firstName: userData.firstName,
          lastName: userData.lastName,
          createdAt: userData.createdAt,
          orgMembershipList: [...userData.orgMembershipList],
        },
        errorMessage: null,
      }
    : state;
};
