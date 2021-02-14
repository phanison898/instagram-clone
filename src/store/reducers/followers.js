const followers = (state = [], action) => {
  switch (action.type) {
    case "GET_FOLLOWERS":
      return action.payload;
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};

export default followers;