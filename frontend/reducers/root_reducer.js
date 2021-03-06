import { combineReducers } from "redux";
import session from "./session_reducer";
import error from "./error_reducer"

const RootReducer = combineReducers({
  session,
  error
});

export default RootReducer;
