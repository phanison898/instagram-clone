import { combineReducers } from "redux";
import currentUser from "./currentUser";
import util from "./util";
import users from "./users";
import posts from "./posts";
import queryUser from "./queryUser";

export default combineReducers({
  currentUser,
  queryUser,
  util,
  users,
  posts,
});
