import React from "react";
import { Avatar, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { primary } from "../../../assets/Colors";

const User = ({ photoURL, displayName, username }) => {
  const classes = Style();
  return (
    <div className={classes.root}>
      <Avatar src={photoURL} />
      <section>
        <h4>{displayName}</h4>
        <p>{username}</p>
      </section>
      <button>Follow</button>
    </div>
  );
};

export default User;

// styling ...

const Style = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    margin: "10px 0",

    "& > .MuiAvatar-root": {
      width: 42,
      height: 42,
    },

    "& > section": {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      marginLeft: 10,

      "& > h4": {},
      "& > p": {
        fontSize: 14,
        color: "grey",
      },
    },

    "& > button": {
      border: 0,
      borderRadius: 4,
      outlineWidth: 0,
      color: "white",
      fontWeight: 600,
      padding: "7px 10px",
      backgroundColor: primary,
      cursor: "pointer",
    },
  },
}));
