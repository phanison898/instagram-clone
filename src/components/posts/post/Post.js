import React from "react";
import Style from "./Style";

const Post = () => {
  const classes = Style();
  return <div className={classes.post}></div>;
};

export default Post;
