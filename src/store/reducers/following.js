const following = (state = [], action) => {
  switch (action.type) {
    case "GET_FOLLOWING_USERS":
      return action.payload;
    case "CLEAN_FOLLOWING_USERS":
      return action.payload;
    case "FOLLOW":
      return state;
    case "UN_FOLLOW":
      // const index = state.indexOf(action.payload);
      // if (index > -1) {
      //   state.splice(index, 1);
      // }
      return state;
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};
export default following;
