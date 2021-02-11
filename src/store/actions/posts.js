import db from "../../firebase";

export const GetPosts = (uid) => async (dispatch, getState) => {
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

  console.log(getState());

  dispatch({
    type: "GET_POSTS",
    payload: posts,
  });
};
