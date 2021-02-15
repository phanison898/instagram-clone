import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import FlipMove from "react-flip-move";
import Post from "./post/Post";

const Posts = () => {
  const classes = Style();
  const { posts } = useSelector((state) => state.queryUser);

  return (
    <div className={classes.posts}>
      <FlipMove style={{ width: "100%" }}>
        {Array.from(posts).map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </FlipMove>
    </div>
  );
};

const Style = makeStyles((theme) => ({
  posts: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default Posts;
