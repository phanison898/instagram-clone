import { combineReducers } from "redux";
import currentUser from "./currentUser";
import util from "./util";
import users from "./users";
import following from "./following";
import followers from "./followers";
import posts from "./posts";

export default combineReducers({
  currentUser,
  util,
  users,
  posts,
  following,
  followers,
});
