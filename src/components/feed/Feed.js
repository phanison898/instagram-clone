import React from "react";
import Stories from "../../components/stories/Stories";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import Style from "./Style";

const Feed = () => {
  const classes = Style();
  return (
    <div className={classes.feed}>
      <div className={classes.main}>
        <div className={classes.stories}>
          <Stories />
        </div>
        <div className={classes.posts}>
          <Posts />
        </div>
      </div>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
    </div>
  );
};

export default Feed;
