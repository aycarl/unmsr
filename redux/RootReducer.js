import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";

import eventsReducer from "./events/eventsReducer";
import orgsReducer from "./orgs/orgsReducer";
// import userReducer from "./user/userReducer";

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['events']
}

// TODO: add user reducer: user: userReducer,

const rootReducer = combineReducers({
  events: eventsReducer,
  orgs: orgsReducer,
});

export default persistReducer(persistConfig, rootReducer);