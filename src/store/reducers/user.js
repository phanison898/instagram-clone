const user = (state = {}, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return action.payload;
    case "LOGIN":
      return action.payload;
    case "LOGIN_WITH_FACEBOOK":
      return action.payload;
    case "LOGIN_WITH_GOOGLE":
      return action.payload;
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};

export default user;
