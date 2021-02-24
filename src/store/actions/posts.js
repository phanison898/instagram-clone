import db, { auth } from "../../firebase/config";

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

export const GetFeedPosts = () => async (dispatch, getState) => {
  let posts = [];

  const following = getState().currentUser.following;
  const users = getState().users.users;

  console.log(following);
  console.log(users);

  for (let i = 0; i < following.length; i++) {
    const userDetails = users.find((user) => user.uid === following[i]);
    console.log(userDetails);

    const response = await db.collection("users").doc(following[i]).collection("posts").get();
    posts = [...posts, ...response.docs.map((doc) => ({ ...doc.data(), ...userDetails }))];
  }

  dispatch({
    type: "GET_FEED_POSTS",
    payload: posts,
  });
};
