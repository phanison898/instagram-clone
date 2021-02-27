import db, { auth } from "./config";
import firebase from "firebase";

export const FetchPostLikes = (uid, id, setLikes) => {
  db.collection("users")
    .doc(uid)
    .collection("posts")
    .doc(id)
    .collection("likes")
    .onSnapshot((snapshot) => setLikes(snapshot.docs.map((doc) => doc.id)));
};

export const FetchPostComments = (uid, id, setComments) => {
  db.collection("users")
    .doc(uid)
    .collection("posts")
    .doc(id)
    .collection("comments")
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot) => setComments(snapshot.docs.map((doc) => doc.data())));
};

export const AddCommentToPost = async ({ postOwnerUID, postId, comment, commentedBy }) => {
  await db
    .collection("users")
    .doc(postOwnerUID)
    .collection("posts")
    .doc(postId)
    .collection("comments")
    .doc()
    .set({
      uid: auth.currentUser.uid,
      fullName: commentedBy,
      comment: comment,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
};
