export const addNewMemberToOrg = (orgsList, membershipInfo) => {

  const { orgUID, userID } = membershipInfo;

  // get org by UID
  const currentOrg = orgsList[orgUID]

  //console.log("currentOrg - " + JSON.stringify(currentOrg));

  if (currentOrg.members && currentOrg.members.includes(userID)) {
    return {
      ...orgsList,
    };
  }

  return {
    ...orgsList,
    [orgUID]: {
      ...currentOrg,
      members: [...currentOrg.members, userID]
    }
  }
};

export const removeMemberFromOrg = (orgsList, membershipInfo) => {

  const { orgUID, userID } = membershipInfo;

  // get org by UID
  const currentOrg = orgsList[orgUID]

  if (!currentOrg.members.includes(userID)) {
    return {
      ...orgsList,
    };
  }

  return {
    ...orgsList,
    [orgUID]: {
      ...currentOrg,
      members: currentOrg.members.filter(user => user !== userID)
    }
  }
}