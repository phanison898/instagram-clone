import db from "../../firebase";

export const GetFollowing = (uid) => async (dispatch) => {
  const followingRes = await db.collection("following").where("uid", "==", uid).get();
  const followingUserUIDs = followingRes.docs.map((doc) => doc.data().following_uid);

  dispatch({
    type: "GET_FOLLOWING_USERS",
    payload: followingUserUIDs,
  });
};

export const Follow = (uid, following_uid) => async (dispatch) => {
  const data = { uid, following_uid, hash_key: `${uid}_${following_uid}` };
  db.collection("following")
    .add(data)
    .then(() => {})
    .catch((error) => alert(error.message));
  dispatch({
    type: "FOLLOW",
    payload: following_uid,
  });
};

export const UnFollow = (uid, following_uid) => async (dispatch) => {
  db.collection("following")
    .where("hash_key", "==", `${uid}_${following_uid}`)
    .get()
    .then((snapshot) => snapshot.forEach((doc) => doc.ref.delete()));
  dispatch({
    type: "UN-FOLLOW",
    payload: following_uid,
  });
};
