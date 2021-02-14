import db from "../../firebase";

export const GetAllUsers = (uid) => async (dispatch) => {
  const res = await db.collection("users").where("uid", "!=", uid).get();
  const data = res.docs.map((doc) => doc.data());
  dispatch({
    type: "GET_ALL_USERS",
    payload: data,
  });
};
