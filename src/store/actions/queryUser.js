import db, { auth } from "../../firebase";
import { GetPosts } from "./../actions/posts";
import { GetFollowingUsers } from "./../actions/following";
import { GetFollowerUsers } from "./../actions/followers";

export const GetQueryUserData = (uid) => async (dispatch, getState) => {
  let data = {};

  const previusUID = getState().queryUser.uid;
  if (!(previusUID && previusUID === uid)) {
    dispatch(CleanQueryUserData());
  }

  // const response = await db.collection("users").doc(uid).get();
  // data = response.data();

  data = getState().users.filteredUsers.find((user) => user.uid === uid);

  dispatch({
    type: "GET_QUERY_USER_DATA",
    payload: data,
  });
  dispatch(GetPosts(uid));
  dispatch(GetQueryUserFollowing(uid));
  dispatch(GetQueryUserFollowers(uid));
};

export const CleanQueryUserData = () => async (dispatch) => {
  dispatch({
    type: "CLEAN_QUERY_USER_DATA",
  });
};

export const GetQueryUserFollowing = (uid) => async (dispatch, getState) => {
  let followingUsers = [];
  let followingUIDs = [];

  if (uid === auth.currentUser.uid) {
    followingUIDs = getState().currentUser.following;
  } else {
    const response = await db.collection("users").doc(uid).collection("following").get();
    followingUIDs = response.docs.map((doc) => doc.id);
    console.log(followingUIDs);
  }

  const users = getState().users.filteredUsers;
  followingUsers = users.filter((user) => followingUIDs.some((follow) => follow === user.uid));

  dispatch({
    type: "GET_QUERY_USER_FOLLOWING",
    payload: followingUsers,
  });
};

export const GetQueryUserFollowers = (uid) => async (dispatch, getState) => {
  let followerUsers = [];
  let followerUIDs = [];

  if (uid === auth.currentUser.uid) {
    followerUIDs = getState().currentUser.followers;
  } else {
    const response = await db.collection("users").doc(uid).collection("followers").get();
    followerUIDs = response.docs.map((doc) => doc.id);
    console.log(followerUIDs);
  }

  const users = getState().users.filteredUsers;

  for (let i = 0; i < followerUIDs.length; i++) {
    users.forEach((user) => {
      console.log("user.uid = " + user.uid);
      console.log("follower.uid = " + followerUIDs[i]);
      if (user.uid === followerUIDs[i]) {
        followerUsers = [...followerUsers, user];
      }
    });
  }

  dispatch({
    type: "GET_QUERY_USER_FOLLOWERS",
    payload: followerUsers,
  });
};
