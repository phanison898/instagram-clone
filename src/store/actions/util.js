export const ToggleTheme = () => async (dispatch) => {
  dispatch({
    type: "TOGGLE",
  });
};

export const LoadingAction = (condition) => async (dispatch) => {
  dispatch({
    type: "LOADING",
    payload: condition,
  });
};

export const ErrorAction = (error) => async (dispatch) => {
  dispatch({
    type: "ERROR",
    payload: error,
  });
};
