import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as TaggedIcon } from "../../assets/icons/tagged.svg";

const Styles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "& > svg": {
      width: 50,
      height: 50,
      fill: "black",
      margin: "20px 0",
    },

    "& > h4": {
      fontSize: 18,
      margin: 5,
      fontWeight: 500,

      "& > span": {
        fontSize: 18,
        fontWeight: 600,
        textTransform: "capitalize",
      },
    },
  },
}));

const NoPosts = ({ user }) => {
  const classes = Styles();
  return (
    <div className={classes.root}>
      <TaggedIcon />
      {user ? (
        <h4>
          <span>{user?.fullName}</span> Has No Posts
        </h4>
      ) : (
        <h4>No Posts To Display</h4>
      )}
      <p style={{ display: user ? "none" : "block" }}>Follow people to view their posts</p>
    </div>
  );
};

export default NoPosts;
