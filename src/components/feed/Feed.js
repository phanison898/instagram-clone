import React from "react";
import Stories from "../../components/stories/Stories";
import Sidebar from "../../components/sidebar/Sidebar";
import Style from "./Style";

const Feed = () => {
  const classes = Style();

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
