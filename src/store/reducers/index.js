import { combineReducers } from "redux";
import currentUser from "./currentUser";
import theme from "./theme";
import users from "./users";
import posts from "./posts";
import queryUser from "./queryUser";

export default combineReducers({
  currentUser,
  queryUser,
  theme,
  users,
  posts,
});
