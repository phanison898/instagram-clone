export const getAllUsers = (data) => async (dispatch) => {
  dispatch({
    type: "GET",
    payload: data,
  });
};
