import OrgActionTypes from "./orgActionTypes";

import CategoryListData from "./../../mock-data/category-list-data";
import OrgsList from "../../mock-data/orgs-list";

const INITIAL_STATE = {
  orgsList: OrgsList.orgsList,
  exploreSearchQuery: "",
  orgCategoryList: CategoryListData,
}

const orgsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrgActionTypes.UPDATE_EXPLORE_SEARCH_QUERY:
      return {
        ...state,
        exploreSearchQuery: action.payload
      };
  
    default:
      return state;
  }
}

export default orgsReducer;