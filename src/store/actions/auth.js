export const LoginAction = (userData) => async (dispatch) => {
  dispatch({
    type: "LOGIN",
    payload: userData,
  });
};

export const LogoutAction = () => async (dispatch) => {
  dispatch({
    type: "LOGOUT",
    payload: {},
  });
};
