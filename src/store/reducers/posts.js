const posts = (state = [], action) => {
  switch (action.type) {
    case "GET_FEED_POSTS":
      return action.payload;
    case "CLEAN_POSTS":
      return action.payload;
    case "LOGOUT":
      return action.payload;
    case "GET_LIKES":
      const postId = action.payload.postId;
      const likes = action.payload.likes;
      return [...state, state.find((post) => post.id === postId && [...post, ...likes])];
    default:
      return state;
  }
};

export default posts;
