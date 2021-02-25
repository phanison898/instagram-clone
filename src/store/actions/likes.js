import db, { auth } from "../../firebase/config";

export const GetLikes = (postId, userId) => async (dispatch) => {
  const response = await db
    .collection("users")
    .doc(userId)
    .collection("posts")
    .doc(postId)
    .collection("likes")
    .get();

  const likes = response.docs.map((doc) => doc.id);

  dispatch({
    type: "GET_LIKES",
    payload: {
      likes,
      postId,
    },
  });
};

export const Like = (postId, userId) => async (dispatch) => {
  db.collection("users")
    .doc(userId)
    .collection("posts")
    .doc(postId)
    .collection("likes")
    .doc(auth.currentUser.uid)
    .set({})
    .then(() => {
      dispatch({
        type: "LIKE",
      });
    });
};

export const UnLike = (postId, userId) => async (dispatch) => {
  db.collection("users")
    .doc(userId)
    .collection("posts")
    .doc(postId)
    .collection("likes")
    .doc(auth.currentUser.uid)
    .delete()
    .then(() => {
      dispatch({
        type: "UN-LIKE",
      });
    });
};
