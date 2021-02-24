const initialState = {
  theme: false,
  loading: false,
  error: "",
};

const util = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, theme: !state.theme };
    case "LOADING":
      return { ...state, loading: action.payload };
    case "ERROR":
      return { ...state, error: action.payload };
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};

export default util;
