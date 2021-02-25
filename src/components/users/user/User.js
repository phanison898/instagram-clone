import React, { useState, useEffect, forwardRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { primary } from "../../../assets/Colors";
import { Follow, UnFollow } from "../../../store/actions/following";
import { auth } from "../../../firebase/config";

const User = forwardRef(({ user }, ref) => {
  const classes = Style();
  const dispatch = useDispatch();

  const { fullName } = useSelector((state) => state.currentUser);

  const [following, setFollowing] = useState(user.isFollowing);
  const [follower, setFollower] = useState(user.isFollower);

  const toggleFollow = () => {
    if (following) {
      dispatch(UnFollow(user.uid));
      setFollowing(false);
    } else {
      dispatch(Follow(user.uid));
      setFollowing(true);
    }
  };

  useEffect(() => {
    setFollowing(user.isFollowing);
    setFollower(user.isFollower);
  }, [user.isFollowing, user.isFollower]);

  return (
    <div ref={ref} className={classes.root}>
      <Avatar src={user.profilePic} />
      <Link to={`/${fullName}/profile?id=${user.uid}`}>
        <h4>{user.fullName}</h4>
        <p>{user.username}</p>
      </Link>
      {user.uid !== auth.currentUser.uid && (
        <section>
          {following ? (
            <button
              style={{
                backgroundColor: "transparent",
                color: "grey",
                border: "1px solid lightgrey",
              }}
              onClick={toggleFollow}
            >
              Following
            </button>
          ) : (
            <button onClick={toggleFollow}>
              {follower && !following ? "Follow Back" : "Follow"}
            </button>
          )}
        </section>
      )}
    </div>
  );
});

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
      color: theme.palette.type === "dark" ? "white" : "black",

      "& > h4": {},
      "& > p": {
        fontSize: 14,
        color: theme.palette.type === "dark" ? "lightgrey" : "grey",
      },
    },

    "& > section": {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",

      "& > button": {
        width: 100,
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
