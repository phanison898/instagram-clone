import db, { auth } from "../../firebase";
import { GetCurrentUserFollowingUsers } from "./../actions/following";
import { GetCurrentUserFollowerUsers } from "./../actions/followers";

export const GetAllUsers = (uid) => async (dispatch, getState) => {
  const res = await db.collection("users").where("uid", "!=", uid).get();
  let data = res.docs.map((doc) => doc.data());

  const followers = getState().currentUser.followers;
  const following = getState().currentUser.following;

  data = data.map((user) => {
    for (let i = 0; i < following.length; i++) {
      if (following[i] === user.uid) {
        return { ...user, isFollowing: true };
      } else {
        return { ...user, isFollowing: false };
      }
    }
  });

  data = data.map((user) => {
    for (let i = 0; i < followers.length; i++) {
      if (followers[i] === user.uid) {
        return { ...user, isFollower: true };
      } else {
        return { ...user, isFollower: false };
      }
    }
  });

  console.log(data);

  dispatch({
    type: "GET_ALL_USERS",
    payload: data,
  });
};
