import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { secondary } from "../../assets/Colors";
import User from "./user/User";
import { GetUsersData } from "../../store/actions/users";

const Users = (props) => {
  const classes = Style();
  const dispatch = useDispatch();

  const { url } = props.match;

  const users = useSelector((state) => state.users);
  const following = useSelector((state) => state.following);
  const followers = useSelector((state) => state.followers);

  const [data, setData] = useState([]);

  const heading = () => {
    const path = url.split("/")[2];
    switch (path) {
      case "users":
        return "Suggested";
      case "followers":
        return "Followers";
      case "following":
        return "Following";
      default:
        return;
    }
  };

  const noContent = () => {
    const path = url.split("/")[2];
    switch (path) {
      case "users":
        return "No Users present";
      case "followers":
        return "Ooo Nooo!!! No one following you yet. Don't worry great things take time";
      case "following":
        return "Oops!! You are not following anyone";
      default:
        return;
    }
  };

  useEffect(() => {
    const path = url.split("/")[2];
    switch (path) {
      case "users":
        dispatch(GetUsersData());
        break;
      case "followers":
        break;
      case "following":
        setData(following);
        break;
      default:
        return;
    }
  }, []);

  return (
    <div className={classes.root}>
      <p>{heading()}</p>
      <Paper className={classes.users}>
        {users.length === 0 ? (
          <p>{noContent()}</p>
        ) : (
          Array.from(users).map((user, i) => <User key={`insta-user-${i}`} user={user} />)
        )}
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

    "& > p": {
      width: "100%",
      height: 100,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "grey",
    },
  },
}));
