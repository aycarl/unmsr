//import OrgActionTypes from "./orgActionTypes";

import CategoryListData from "./../../mock-data/category-list-data";

const INITIAL_STATE = {
  orgsList: {},
  exploreSearchQuery: "",
  orgCategoryList: CategoryListData,
}

const orgsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  
    default:
      return state;
  }
}

export default orgsReducer;