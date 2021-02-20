const theme = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE":
      return !state;
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};

export default theme;
