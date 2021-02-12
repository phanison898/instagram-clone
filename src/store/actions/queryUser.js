import db from "../../firebase";
import { GetPosts, CleanPosts } from "./../actions/posts";
import { GetFollowingUsers, CleanFollowingUsers } from "./../actions/following";

export const GetQueryUserData = (uid) => async (dispatch, getState) => {
  let data = {};

  const previusUID = getState().queryUser.uid;
  if (!(previusUID && previusUID === uid)) {
    dispatch(CleanQueryUserData());
  }

  const response = await db.collection("users").doc(uid).get();
  data = response.data();
  dispatch({
    type: "GET_QUERY_USER_DATA",
    payload: data,
  });
  dispatch(GetPosts(uid));
  dispatch(GetFollowingUsers(uid));
};

export const CleanQueryUserData = () => async (dispatch) => {
  dispatch({
    type: "CLEAN_QUERY_USER_DATA",
    payload: {},
  });
  dispatch(CleanPosts());
  dispatch(CleanFollowingUsers());
};
