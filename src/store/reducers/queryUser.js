const initialState = {
  posts: [],
  following: [],
  followers: [],
};

const queryUser = (state = initialState, action) => {
  switch (action.type) {
    case "GET_QUERY_USER_DATA":
      const data = action.payload;
      return { ...state, ...data };

    case "CLEAN_QUERY_USER_DATA":
      return {};

    case "GET_QUERY_USER_POSTS":
      return { ...state, posts: action.payload };

    case "GET_QUERY_USER_FOLLOWERS":
      return { ...state, followers: action.payload };

    case "GET_QUERY_USER_FOLLOWING":
      return { ...state, following: action.payload };

    case "LOGOUT":
      return action.payload;

    default:
      return state;
  }
};

export default queryUser;
