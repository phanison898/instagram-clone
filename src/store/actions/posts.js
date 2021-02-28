import db, { auth } from "../../firebase/config";
import { LoadingAction } from "../actions/util";

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
  dispatch(LoadingAction(true));
  let posts = [];

  const following = getState().currentUser.following;
  const users = getState().users.users;

  for (let i = 0; i < following?.length; i++) {
    const userDetails = users.find((user) => user.uid === following[i]);

    const response = await db.collection("users").doc(following[i]).collection("posts").get();
    response.docs.map(async (doc) => {
      posts.push({ id: doc.id, ...doc.data(), ...userDetails });
    });
  }

  dispatch(LoadingAction(false));
  dispatch({
    type: "GET_FEED_POSTS",
    payload: posts,
  });
};
