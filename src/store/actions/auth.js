import db, { auth } from "../../firebase/config";
import { SignUp, SingIn } from "../../firebase/auth";
import { GetCurrentUserFollowingUsers } from "./../actions/following";
import { GetCurrentUserFollowerUsers } from "./../actions/followers";

export const SignupAction = ({ email, password, name, username }) => async (dispatch) => {
  SignUp({ email, password, name, username })
    .then((userData) =>
      dispatch({
        type: "SIGN_UP",
        payload: userData,
      })
    )
    .catch((error) => alert(error));
};

export const SignInAction = () => async (dispatch) => {
  db.collection("users")
    .doc(auth.currentUser.uid)
    .get()
    .then((doc) => {
      dispatch({
        type: "SIGN_IN",
        payload: doc.data(),
      });
      dispatch(GetCurrentUserFollowingUsers(auth.currentUser.uid));
      dispatch(GetCurrentUserFollowerUsers(auth.currentUser.uid));
    })
    .catch((error) => alert(error));
};

export const SignInWith = (_with) => async (dispatch) => {
  SingIn(_with)
    .then(() => {
      dispatch(SignInAction());
    })
    .catch((error) => alert(error));
};

export const GetLoggedUser = () => async (dispatch) => {
  db.collection("users")
    .doc(auth.currentUser.uid)
    .get()
    .then((doc) => {
      dispatch({
        type: "GET_LOGGED_USER_DATA",
        payload: doc.data(),
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
