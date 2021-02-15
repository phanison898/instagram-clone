import db, { auth } from "../../firebase";
import { GetCurrentUserFollowingUsers } from "./../actions/following";
import { GetCurrentUserFollowerUsers } from "./../actions/followers";

export const GetAllUsers = (uid) => async (dispatch, getState) => {
  const res = await db.collection("users").where("uid", "!=", uid).get();
  let data = res.docs.map((doc) => doc.data());

  const followers = getState().currentUser.followers;
  const following = getState().currentUser.following;

  data = data.map((user) => {
    let condition = false;
    for (let i = 0; i < following?.length; i++) {
      if (following[i] === user?.uid) {
        condition = true;
        break;
      }
    }
    if (condition) {
      return { ...user, isFollowing: true };
    } else {
      return { ...user, isFollowing: false };
    }
  });

  data = data.map((user) => {
    let condition = false;
    for (let i = 0; i < followers?.length; i++) {
      if (followers[i] === user?.uid) {
        condition = true;
        break;
      }
    }
    if (condition) {
      return { ...user, isFollower: true };
    } else {
      return { ...user, isFollower: false };
    }
  });

  dispatch({
    type: "GET_ALL_USERS",
    payload: data,
  });
};
