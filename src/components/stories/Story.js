import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Style from "./Style";

function Story({ profileImage, title }) {
  const classes = Style();

  const shrinkText = (text) => {
    return text.length > 8 ? text.substring(0, 6) + " ..." : text;
  };

  return (
    <div className={classes.story}>
      <Avatar src={profileImage} className={classes.profilePic} />
      <p>{shrinkText(title)}</p>
    </div>
  );
}

export default Story;
