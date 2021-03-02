import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Stories from "../../components/stories/Stories";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";
import Style from "./Style";
import LoadingDots from "../util/animations/LoadingDots";
import NoPosts from "../posts/NoPosts";

const Feed = () => {
  const classes = Style();
  const { loading } = useSelector((state) => state.util);
  const posts = useSelector((state) => state.posts);

  return (
    <div className={classes.feed}>
      <div className={classes.feed__main}>
        <div className={classes.main__stories}>
          <Stories />
        </div>

        <div className={classes.main__posts}>
          {loading ? <LoadingDots open={loading} /> : posts?.length === 0 ? <NoPosts /> : <Posts />}
        </div>
      </div>

      <div className={classes.feed__sidebar}>
        <Sidebar />
      </div>
    </div>
  );
};

export default Feed;
