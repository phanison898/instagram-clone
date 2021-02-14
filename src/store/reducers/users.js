const users = (state = [], action) => {
  switch (action.type) {
    case "GET_ALL_USERS":
      return action.payload;
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};

export default users;
