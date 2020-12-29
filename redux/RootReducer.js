import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

// reducers
import eventsReducer from "./events/eventsReducer";
import orgsReducer from "./orgs/orgsReducer";
import userReducer from "./user/userReducer";

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['events']
}

// root reducer
const rootReducer = combineReducers({
  events: eventsReducer,
  orgs: orgsReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);