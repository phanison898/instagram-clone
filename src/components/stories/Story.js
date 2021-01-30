import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Style from "./Style";

function Story({ profileImage, title }) {
  const classes = Style();
  return (
    <div className={classes.story}>
      <Avatar src={profileImage} className={classes.profilePic} />
      <p>{title}</p>
    </div>
  );
}

export default Story;
