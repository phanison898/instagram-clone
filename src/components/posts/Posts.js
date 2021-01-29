import React from "react";
import Style from "./Style";

const Posts = () => {
  const classes = Style();
  return <div className={classes.posts}></div>;
};

export default Posts;
