const following = (state = [], action) => {
  switch (action.type) {
    case "GET_FOLLOWING_USERS":
      return action.payload;
    case "FOLLOW":
      return state.push(action.payload);
    case "UN-FOLLOW":
      const index = state.indexOf(action.payload);
      if (index > -1) {
        state.splice(index, 1);
      }
      return state;
    default:
      return state;
  }
};
export default following;
