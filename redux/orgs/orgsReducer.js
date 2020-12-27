import OrgsActionTypes from "./orgsActionTypes";
import { addNewMemberToOrg, removeMemberFromOrg } from "./orgsUtils";

import CategoryListData from "./../../mock-data/category-list-data";
import OrgsList from "../../mock-data/orgs-list";

const INITIAL_STATE = {
  orgsList: OrgsList.orgsList,
  exploreSearchQuery: "",
  orgCategoryList: CategoryListData,
}

const orgsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrgsActionTypes.UPDATE_EXPLORE_SEARCH_QUERY:
      return {
        ...state,
        exploreSearchQuery: action.payload
      };

    case OrgsActionTypes.ADD_NEW_MEMBER:
      return {
        ...state,
        orgsList: addNewMemberToOrg(state.orgsList, action.payload)
      }

    case OrgsActionTypes.REMOVE_MEMBER:
      return {
        ...state,
        orgsList: removeMemberFromOrg(state.orgsList, action.payload)
      }
  
    default:
      return state;
  }
}

export default orgsReducer;