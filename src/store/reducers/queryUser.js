const queryUser = (state = {}, action) => {
  switch (action.type) {
    case "GET_QUERY_USER_DATA":
      return action.payload;
    case "CLEAN_QUERY_USER_DATA":
      return action.payload;
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};

export default queryUser;
