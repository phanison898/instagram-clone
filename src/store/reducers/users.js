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

    case "UPDATE_CURRENT_USER_DATA":
      return {
        ...state,
        filteredUsers: state.filteredUsers.map((user) => {
          if (user.uid === action.payload.uid) {
            return { ...user, ...action.payload };
          } else {
            return user;
          }
        }),
      };

    case "FOLLOW":
      return {
        ...state,
        filteredUsers: state.filteredUsers.map((user) => {
          if (user.uid === action.payload.uid) {
            return { ...user, isFollowing: true };
          } else {
            return user;
          }
        }),
      };

    case "UN_FOLLOW":
      return {
        ...state,
        filteredUsers: state.filteredUsers.map((user) => {
          if (user.uid === action.payload.uid) {
            return { ...user, isFollowing: false };
          } else {
            return user;
          }
        }),
      };

    case "LOGOUT":
      return action.payload;

    default:
      return state;
  }
};

export default users;
