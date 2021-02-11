import db from "../../firebase";

export const GetUserData = (uid) => async (dispatch, getState) => {
  let data = {};

  const response = await db.collection("users").doc(uid).get();
  data = response.data();

  dispatch({
    type: "GET_USER_DATA",
    payload: data,
  });
};

export const GetAllUsers = (uid) => async (dispatch) => {
  const res = await db.collection("users").where("uid", "!=", uid).get();
  const data = res.docs.map((doc) => doc.data());
  dispatch({
    type: "GET_ALL_USERS",
    payload: data,
  });
};

export const GetSetOfUsers = (arrayOfUIDs) => async (dispatch) => {
  let data = [];
  for (let i = 0; i < arrayOfUIDs.length; i++) {
    const res = await db.collection("users").doc(arrayOfUIDs[i]).get();
    data.push(res.docs.map((doc) => doc.data()));
  }
  dispatch({
    type: "GET_SET_OF_USERS",
    payload: data,
  });
};

export const GetFiveUsers = () => async (dispatch) => {
  const res = await db.collection("users").get();
  const data = res.docs.map((doc) => doc.data());
  dispatch({
    type: "GET_FIVE_USERS",
    payload: data,
  });
};

export const GetUserByUID = (uid) => async (dispatch) => {
  const res = await db.collection("users").doc(uid).get();
  const data = res.docs.map((doc) => doc.data());
  dispatch({
    type: "GET_USER_BY_ID",
    payload: data,
  });
};
