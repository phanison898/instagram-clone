import db, { auth } from "../../firebase";

export const GetFollowingUsers = (uid) => async (dispatch) => {
  let data = [];

  const response = await db.collection("users").doc(uid).collection("following").get();

  const userIds = response.docs.map((doc) => {
    return doc.id;
  });

  for (let i = 0; i < userIds.length; i++) {
    const _response = await db.collection("users").doc(userIds[i]).get();
    data = _response.data();
  }

  dispatch({
    type: "GET_FOLLOWING_USERS",
    payload: data,
  });
};

export const CleanFollowingUsers = () => async (dispatch) => {
  dispatch({
    type: "CLEAN_FOLLOWING_USERS",
    payload: [],
  });
};

export const Follow = (userId) => async (dispatch) => {
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
          });
        });
    });
};

export const UnFollow = (userId) => async (dispatch) => {
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
          });
        });
    });
};
