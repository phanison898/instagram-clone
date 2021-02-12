import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Stories from "../../components/stories/Stories";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { GetUserData } from "../../store/actions/users";
import { GetFollowingUsers } from "../../store/actions/following";
import { auth } from "../../firebase";
import Style from "./Style";

const Feed = () => {
  const classes = Style();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetFollowingUsers(auth.currentUser.uid));
  }, []);

  return (
    <div className={classes.feed}>
      <div className={classes.feed__main}>
        <div className={classes.main__stories}>
          <Stories />
        </div>
        <div className={classes.main__posts}>{/* <Posts /> */}</div>
      </div>
      <div className={classes.feed__sidebar}>
        <Sidebar />
      </div>
    </div>
  );
};

export default Feed;
