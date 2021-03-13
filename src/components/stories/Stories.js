import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Paper } from "@material-ui/core";
import Story from "./Story";
import Style from "./Style";

const Stories = () => {
  const classes = Style();
  const { users: allUsers } = useSelector((state) => state.users);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(allUsers);
  }, [allUsers]);

  return (
    <Paper className={classes.stories}>
      {users?.map(({ uid, profilePic, fullName }, i) => (
        <Story key={uid} profileImage={profilePic} title={fullName} />
      ))}
    </Paper>
  );
};

export default Stories;
