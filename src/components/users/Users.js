import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { secondary } from "../../assets/Colors";
import User from "./user/User";

const Users = (props) => {
  const classes = Style();

  const { url } = props.match;

  const heading = () => {
    const path = url.split("/")[2];

    switch (path) {
      case "people":
        return "Suggested";
      case "followers":
        return "Followers";
      case "following":
        return "Following";
      default:
        return;
    }
  };

  return (
    <div className={classes.root}>
      <p>{heading()}</p>
      <Paper className={classes.users}>
        {usersData.map((user, i) => (
          <User key={i} {...user} />
        ))}
      </Paper>
    </div>
  );
};

export default Users;

// stying ...

const Style = makeStyles((theme) => ({
  root: {
    width: 600,
    display: "flex",
    flexDirection: "column",
    marginTop: 40,

    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
      width: "100%",
    },

    "& > p": {
      padding: 5,
    },
  },

  users: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: 10,
    border: 0,
    boxShadow: "none",
    borderRadius: 0,
    border: `1px solid ${secondary}`,
  },
}));

// sample data ...

const usersData = [
  {
    profilePic:
      "https://lh3.googleusercontent.com/a-/AOh14GiX_VsioIBbWt8mkunx_PMbgRJuVsCBQWk_-ewsow=s96-c",
    name: "phani kumar",
    username: "phanison898",
  },
  {
    profilePic:
      "https://lh3.googleusercontent.com/a-/AOh14GiX_VsioIBbWt8mkunx_PMbgRJuVsCBQWk_-ewsow=s96-c",
    name: "phani kumar",
    username: "phanison898",
  },
  {
    profilePic:
      "https://lh3.googleusercontent.com/a-/AOh14GiX_VsioIBbWt8mkunx_PMbgRJuVsCBQWk_-ewsow=s96-c",
    name: "phani kumar",
    username: "phanison898",
  },
  {
    profilePic:
      "https://lh3.googleusercontent.com/a-/AOh14GiX_VsioIBbWt8mkunx_PMbgRJuVsCBQWk_-ewsow=s96-c",
    name: "phani kumar",
    username: "phanison898",
  },
  {
    profilePic:
      "https://lh3.googleusercontent.com/a-/AOh14GiX_VsioIBbWt8mkunx_PMbgRJuVsCBQWk_-ewsow=s96-c",
    name: "phani kumar",
    username: "phanison898",
  },
  {
    profilePic:
      "https://lh3.googleusercontent.com/a-/AOh14GiX_VsioIBbWt8mkunx_PMbgRJuVsCBQWk_-ewsow=s96-c",
    name: "phani kumar",
    username: "phanison898",
  },
  {
    profilePic:
      "https://lh3.googleusercontent.com/a-/AOh14GiX_VsioIBbWt8mkunx_PMbgRJuVsCBQWk_-ewsow=s96-c",
    name: "phani kumar",
    username: "phanison898",
  },
  {
    profilePic:
      "https://lh3.googleusercontent.com/a-/AOh14GiX_VsioIBbWt8mkunx_PMbgRJuVsCBQWk_-ewsow=s96-c",
    name: "phani kumar",
    username: "phanison898",
  },
  {
    profilePic:
      "https://lh3.googleusercontent.com/a-/AOh14GiX_VsioIBbWt8mkunx_PMbgRJuVsCBQWk_-ewsow=s96-c",
    name: "phani kumar",
    username: "phanison898",
  },
  {
    profilePic:
      "https://lh3.googleusercontent.com/a-/AOh14GiX_VsioIBbWt8mkunx_PMbgRJuVsCBQWk_-ewsow=s96-c",
    name: "phani kumar",
    username: "phanison898",
  },
];
