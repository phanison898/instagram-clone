import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { primary } from "../../../assets/Colors";
import { Follow, UnFollow } from "../../../store/actions/following";

const User = ({ user }) => {
  const classes = Style();
  const dispatch = useDispatch();

  const { fullName } = useSelector((state) => state.currentUser);
  const following = useSelector((state) => state.following);

  const [isFollowing, setIsFollowing] = useState(() =>
    Array.from(following).some((follow) => follow.uid === user.uid)
  );

  const toggleFollow = () => {
    if (isFollowing) {
      dispatch(UnFollow(user.uid));
      setIsFollowing(false);
    } else {
      dispatch(Follow(user.uid));
      setIsFollowing(true);
    }
  };

  return (
    <div className={classes.root}>
      <Avatar src={user.profilePic} />
      <Link to={`/${fullName}/profile?id=${user.uid}`}>
        <h4>{user.fullName}</h4>
        <p>{user.username}</p>
      </Link>
      <section onClick={toggleFollow}>
        {isFollowing ? (
          <button
            style={{
              backgroundColor: "transparent",
              color: "grey",
              border: "1px solid lightgrey",
            }}
          >
            Following
          </button>
        ) : (
          <button>Follow</button>
        )}
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
