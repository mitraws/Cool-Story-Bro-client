import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import homepage from "./homepage/reducer"
import detail from "./detail/reducer"

export default combineReducers({
  appState,
  user,
  homepage,
  detail
});
