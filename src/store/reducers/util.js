const util = (state = { theme: false }, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, theme: !state.theme };
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};

export default util;
