import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Stories from "../../components/stories/Stories";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import db from "../../firebase";
import { getAllUsers } from "../../store/actions/people";
import Style from "./Style";

const Feed = () => {
  const classes = Style();
  const dispatch = useDispatch();

  const { uid } = useSelector((state) => state.user);

  useEffect(() => {
    db.collection("users")
      .where("uid", "!=", uid)
      .onSnapshot((snap) => dispatch(getAllUsers(snap.docs.map((doc) => doc.data()))));
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
