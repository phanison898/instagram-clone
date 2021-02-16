import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Paper } from "@material-ui/core";
import FlipMove from "react-flip-move";
import User from "./user/User";
import Style from "./Style";

const Suggested = () => {
  const classes = Style();

  const _users = useSelector((state) => state.users.filteredUsers);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(_users);
  }, [_users]);

  return (
    <div className={classes.root}>
      <p>Suggested Users</p>
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
