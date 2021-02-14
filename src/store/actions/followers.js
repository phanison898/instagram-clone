import db, { auth } from "../../firebase";

export const GetFollowerUsers = (uid) => async (dispatch) => {
  let data = [];

  let type;

  if (uid === auth.currentUser.uid) {
    type = "GET_CURRENT_USER_FOLLOWERS";
  } else {
    type = "GET_QUERY_USER_FOLLOWERS";
  }

  const response = await db.collection("users").doc(uid).collection("followers").get();

  const userIds = response.docs.map((doc) => {
    return doc.id;
  });

  for (let i = 0; i < userIds.length; i++) {
    const _response = await db.collection("users").doc(userIds[i]).get();
    data = _response.data();
  }

  dispatch({
    type: "GET_QUERY_USER_FOLLOWERS",
    payload: data,
  });
};

export const GetCurrentUserFollowerUsers = (uid) => async (dispatch) => {
  let data = [];

  const response = await db.collection("users").doc(uid).collection("followers").get();

  const userIds = response.docs.map((doc) => {
    return doc.id;
  });

  for (let i = 0; i < userIds.length; i++) {
    const _response = await db.collection("users").doc(userIds[i]).get();
    data = _response.data();
  }

  dispatch({
    type: "GET_CURRENT_USER_FOLLOWERS",
    payload: data,
  });
};
