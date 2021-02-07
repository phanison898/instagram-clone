import { combineReducers } from "redux";
import user from "./user";
import util from "./util";
import people from "./people";

export default combineReducers({
  user,
  util,
  people,
});
