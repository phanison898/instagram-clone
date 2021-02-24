import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Paper } from "@material-ui/core";
import FlipMove from "react-flip-move";
import User from "./user/User";
import Style from "./Style";

const Followers = () => {
  const classes = Style();
  const history = useHistory();

  const { followers, uid, fullName } = useSelector((state) => state.queryUser);
  const { uid: currentUserUID } = useSelector((state) => state.currentUser);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(followers);
  }, [followers]);

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <KeyboardBackspaceIcon onClick={() => history.goBack()} />
        <p>{uid === currentUserUID ? "People following you" : `People following ${fullName}`}</p>
      </div>
      <Paper className={classes.users}>
        {users?.length === 0 ? (
          <p>No followers</p>
        ) : (
          <FlipMove style={{ width: "100%" }}>
            {users?.map((user, i) => (
              <User key={`following-user-${i}`} user={user} />
            ))}
          </FlipMove>
        )}
      </Paper>
    </div>
  );
};

export default Followers;
