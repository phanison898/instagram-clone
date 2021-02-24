import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Paper } from "@material-ui/core";
import FlipMove from "react-flip-move";
import { auth } from "../../firebase/config";
import User from "./user/User";
import Style from "./Style";

const Suggested = () => {
  const classes = Style();
  const history = useHistory();

  const _users = useSelector((state) => state.users.filteredUsers);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(
      _users
        .sort((a, b) => b.isFollowing - a.isFollowing)
        .filter((user) => user.uid !== auth.currentUser.uid)
    );
  }, [_users]);

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <KeyboardBackspaceIcon onClick={() => history.goBack()} />
        <p>Suggested Users</p>
      </div>
      <Paper className={classes.users}>
        {users?.length === 0 ? (
          <p>No users available</p>
        ) : (
          <FlipMove style={{ width: "100%" }}>
            {users?.map((user, i) => (
              <User key={`insta-user-${i}`} user={user} />
            ))}
          </FlipMove>
        )}
      </Paper>
    </div>
  );
};

export default Suggested;
