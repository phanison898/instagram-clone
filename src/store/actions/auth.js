import db, { auth, facebookProvider, googleProvider } from "../../firebase";
import firebase from "firebase";

export const SignupAction = ({ email, password, name, username }) => async (dispatch) => {
  let userData = {};

  auth
    .createUserWithEmailAndPassword(email, password)
    .then((authUser) =>
      authUser.user
        .updateProfile({
          displayName: name,
        })
        .then(() => {
          userData = {
            uid: authUser.user.uid,
            email: authUser.user.email,
            fullName: authUser.user.displayName,
            username: username,
            bio: "",
            profilePic: authUser.user.photoURL,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          };
          db.collection("users").doc(authUser.user.uid).set(userData);

          dispatch({
            type: "SIGN_UP",
            payload: userData,
          });
        })
        .catch((error) => alert(error))
    )
    .catch((error) => alert(error));
};

export const LoginAction = (uid) => async (dispatch) => {
  db.collection("users")
    .doc(uid)
    .get()
    .then((doc) => {
      dispatch({
        type: "LOGIN",
        payload: doc.data(),
      });
    })
    .catch((error) => alert(error));
};

export const LoginWithFacebook = () => async (dispatch) => {
  let userData = {};

  auth
    .signInWithPopup(facebookProvider)
    .then((authUser) => {
      const ref = db.collection("users").doc(authUser.user.uid);

      ref.get().then((doc) => {
        if (!doc.exists) {
          userData = {
            uid: authUser.user.uid,
            email: "",
            fullName: authUser.user.displayName,
            username: "",
            bio: "",
            profilePic: authUser.user.photoURL,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          };
          ref.set(userData);
        } else {
          userData = doc.data();
        }
      });

      dispatch({
        type: "LOGIN_WITH_FACEBOOK",
        payload: userData,
      });
    })
    .catch((error) => alert(error));
};

export const LoginWithGoogle = () => async (dispatch) => {
  let userData = {};

  auth
    .signInWithPopup(googleProvider)
    .then((authUser) => {
      const ref = db.collection("users").doc(authUser.user.uid);

      ref.get().then((doc) => {
        if (!doc.exists) {
          userData = {
            uid: authUser.user.uid,
            email: authUser.user.email,
            fullName: authUser.user.displayName,
            username: authUser.user.email.split("@")[0],
            bio: "",
            profilePic: authUser.user.photoURL,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          };
          ref
            .set(userData)
            .then(() => {
              dispatch({
                type: "LOGIN_WITH_GOOGLE",
                payload: userData,
              });
            })
            .catch((error) => alert(error));
        } else {
          userData = doc.data();
          dispatch({
            type: "LOGIN_WITH_GOOGLE",
            payload: userData,
          });
        }
      });
    })
    .catch((error) => alert(error));
};

export const LogoutAction = () => async (dispatch) => {
  dispatch({
    type: "LOGOUT",
    payload: {},
  });
};
