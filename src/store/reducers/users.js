const initialState = {
  users: [],
  filteredUsers: [],
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_USERS":
      return { ...state, users: action.payload };
    case "GET_FILTERED_USERS":
      return { ...state, filteredUsers: action.payload };
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};

export default users;
