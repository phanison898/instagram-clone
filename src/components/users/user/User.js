import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { primary } from "../../../assets/Colors";
import { Follow, UnFollow } from "../../../store/actions/following";

const User = ({ uid }) => {
  const classes = Style();
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.currentUser);
  const users = useSelector((state) => state.users);
  const following = useSelector((state) => state.following);

  const [isFollowing, setIsFollowing] = useState(false);
  const [data, setData] = useState(users.find((user) => user.uid === uid));

  const toggleFollow = () => {
    if (isFollowing) {
      dispatch(UnFollow(currentUser.uid, data.uid));
      setIsFollowing(false);
    } else {
      dispatch(Follow(currentUser.uid, data.uid));
      setIsFollowing(true);
    }
  };

  useEffect(() => {
    console.log(data.fullName);

    Array.from(following).forEach((follow) => {
      if (follow === data.uid) {
        setIsFollowing(true);
      }
    });
  }, [following]);

  return (
    <div className={classes.root}>
      <Avatar src={data.profilePic} />
      <Link to={`/${currentUser.fullName}/profile?id=${data.uid}`}>
        <h4>{data.fullName}</h4>
        <p>{data.username}</p>
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
