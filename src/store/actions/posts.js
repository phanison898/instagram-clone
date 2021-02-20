import db from "../../firebase/config";

export const GetPosts = (uid) => async (dispatch) => {
  const responce = await db
    .collection("users")
    .doc(uid)
    .collection("posts")
    .orderBy("timestamp", "desc")
    .get();
  const posts = responce.docs.map((doc) => {
    const id = doc.id;
    const data = doc.data();
    return { id, ...data };
  });

  dispatch({
    type: "GET_QUERY_USER_POSTS",
    payload: posts,
  });
};

export const GetCurrentUserPosts = (uid) => async (dispatch) => {
  const responce = await db
    .collection("users")
    .doc(uid)
    .collection("posts")
    .orderBy("timestamp", "desc")
    .get();
  const posts = responce.docs.map((doc) => {
    const id = doc.id;
    const data = doc.data();
    return { id, ...data };
  });

  dispatch({
    type: "GET_CURRENT_USER_POSTS",
    payload: posts,
  });
};
