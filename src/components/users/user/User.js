import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { primary } from "../../../assets/Colors";

const User = ({ photoURL, displayName: name, username, uid }) => {
  const classes = Style();
  const { displayName } = useSelector((state) => state.user);
  return (
    <div className={classes.root}>
      <Avatar src={photoURL} />
      <Link to={`/${displayName}/profile?id=${uid}`}>
        <h4>{name}</h4>
        <p>{username}</p>
      </Link>
      <section>
        <button>Follow</button>
      </section>
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

    "& > a": {
      display: "flex",
      flexDirection: "column",
      marginLeft: 10,
      textDecoration: "none",
      color: "black",

      "& > h4": {},
      "& > p": {
        fontSize: 14,
        color: "grey",
      },
    },

    "& > section": {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",

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
  },
}));
