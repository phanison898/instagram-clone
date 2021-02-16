import db from "../../firebase";

export const GetAllUsers = (uid) => async (dispatch, getState) => {
  const res = await db.collection("users").get();
  let data = res.docs.map((doc) => doc.data());

  dispatch({
    type: "GET_ALL_USERS",
    payload: data,
  });
  dispatch(GetFilteredUsers());
};

export const GetFilteredUsers = () => async (dispatch, getState) => {
  let data = [];

  const users = getState().users.users;
  const followers = getState().currentUser.followers;
  const following = getState().currentUser.following;

  data = users.map((user) => {
    let isFollowing = false;
    let isFollower = false;

    for (let i = 0; i < following?.length; i++) {
      if (following[i] === user?.uid) {
        isFollowing = true;
        break;
      }
    }

    for (let i = 0; i < followers?.length; i++) {
      if (followers[i] === user?.uid) {
        isFollower = true;
        break;
      }
    }

    return { ...user, isFollowing: isFollowing, isFollower: isFollower };
  });

  dispatch({
    type: "GET_FILTERED_USERS",
    payload: data,
  });
};
