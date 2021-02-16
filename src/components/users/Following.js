import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Paper } from "@material-ui/core";
import FlipMove from "react-flip-move";
import User from "./user/User";
import Style from "./Style";

const Following = () => {
  const classes = Style();

  const { following, uid, fullName } = useSelector((state) => state.queryUser);
  const { uid: currentUserUID } = useSelector((state) => state.currentUser);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(following);
  }, [following]);

  return (
    <div className={classes.root}>
      <p>{uid === currentUserUID ? "People followed by you" : `People followed by ${fullName}`}</p>
      <Paper className={classes.users}>
        {users?.length === 0 ? (
          <p>Not following anyone</p>
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

export default Following;
