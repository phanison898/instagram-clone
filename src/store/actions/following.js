import db, { auth } from "../../firebase";
import { GetFilteredUsers } from "../actions/users";

export const GetFollowingUsers = (uid) => async (dispatch) => {
  let data = [];

  const response = await db.collection("users").doc(uid).collection("following").get();

  const userIds = response.docs.map((doc) => {
    return doc.id;
  });

  for (let i = 0; i < userIds.length; i++) {
    const _response = await db.collection("users").doc(userIds[i]).get();
    data = [...data, _response.data()];
  }

  dispatch({
    type: "GET_QUERY_USER_FOLLOWING",
    payload: data,
  });
};

export const GetCurrentUserFollowingUsers = (uid) => async (dispatch) => {
  db.collection("users")
    .doc(uid)
    .collection("following")
    .onSnapshot((snapshot) => {
      dispatch({
        type: "GET_CURRENT_USER_FOLLOWING",
        payload: snapshot.docs.map((doc) => doc.id),
      });
    });
};

export const Follow = (userId) => async (dispatch, getState) => {
  db.collection("users")
    .doc(auth.currentUser.uid)
    .collection("following")
    .doc(userId)
    .set({})
    .then(() => {
      db.collection("users")
        .doc(userId)
        .collection("followers")
        .doc(auth.currentUser.uid)
        .set({})
        .then(() => {
          dispatch({
            type: "FOLLOW",
            payload: {
              uid: userId,
            },
          });
        });
    });
};

export const UnFollow = (userId) => async (dispatch, getState) => {
  db.collection("users")
    .doc(auth.currentUser.uid)
    .collection("following")
    .doc(userId)
    .delete()
    .then(() => {
      db.collection("users")
        .doc(userId)
        .collection("followers")
        .doc(auth.currentUser.uid)
        .delete()
        .then(() => {
          dispatch({
            type: "UN_FOLLOW",
            payload: {
              uid: userId,
            },
          });
        });
    });
};
