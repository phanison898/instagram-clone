import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Paper } from "@material-ui/core";
import Story from "./Story";
import Style from "./Style";

const Stories = () => {
  const classes = Style();
  const { users } = useSelector((state) => state.users);

  const [_users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(users);
  }, []);

  return (
    <Paper className={classes.stories}>
      {_users.map(({ uid, profilePic, fullName }, i) => (
        <Story key={uid} profileImage={profilePic} title={fullName} />
      ))}
    </Paper>
  );
};

const usernames = [
  "Walter",
  "Jessy",
  "Hank",
  "Skinny",
  "Badger",
  "Mike",
  "Gus",
  "Hector",
  "Toco",
  "Tommy",
  "Arthur",
  "John",
  "Finn",
  "Alfie",
];

export default Stories;
