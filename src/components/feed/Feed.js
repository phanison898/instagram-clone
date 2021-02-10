import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Stories from "../../components/stories/Stories";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { GetAllUsers } from "../../store/actions/users";
import { GetFollowing } from "../../store/actions/following";
import Style from "./Style";

const Feed = () => {
  const classes = Style();
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.currentUser);

  useEffect(() => {
    dispatch(GetAllUsers(uid));
    dispatch(GetFollowing(uid));
  }, [dispatch]);

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
