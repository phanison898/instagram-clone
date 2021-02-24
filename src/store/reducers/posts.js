const posts = (state = [], action) => {
  switch (action.type) {
    case "GET_FEED_POSTS":
      return action.payload;
    case "CLEAN_POSTS":
      return action.payload;
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};

export default posts;
