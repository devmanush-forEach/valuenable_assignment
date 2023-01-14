import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import policyReducer from "./policy.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  policy: policyReducer,
});

export default rootReducer;
