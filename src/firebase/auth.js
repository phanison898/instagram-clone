import db, { auth, facebookProvider, googleProvider } from "./config";
import firebase from "firebase";

// Stores user data in DB, while sign-in with facebook/google
export const SingIn = (_with) =>
  new Promise((resolve, reject) => {
    let userData = {};

    let provider;
    if (_with === "facebook") {
      provider = facebookProvider;
    } else if (_with === "google") {
      provider = googleProvider;
    } else if (_with === "email") {
    }

    auth
      .signInWithPopup(provider)
      .then((authUser) => {
        const ref = db.collection("users").doc(authUser.user.uid);

        ref.get().then((doc) => {
          if (!doc.exists) {
            userData = {
              uid: authUser.user.uid,
              email: _with === "facebook" ? "" : authUser.user.email,
              fullName: authUser.user.displayName,
              username: _with === "facebook" ? "" : authUser.user.email.split("@")[0],
              bio: "",
              profilePic: authUser.user.photoURL,
              createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            };
            ref.set(userData);
          } else {
            userData = doc.data();
          }
        });
        resolve(userData);
      })
      .catch((error) => reject(error));
  });

// Stores user data in DB, while sign-up with email
export const SignUp = ({ email, password, name, username }) =>
  new Promise((resolve, reject) => {
    let userData;
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        userData = {
          uid: authUser.user.uid,
          email: authUser.user.email,
          fullName: name,
          username: username,
          bio: "",
          profilePic: authUser.user.photoURL,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        };
        db.collection("users").doc(authUser.user.uid).set(userData);
        resolve(userData);
      })
      .catch((error) => reject(error));
  });
