import React, { forwardRef } from "react";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import ReactPlayer from "react-player";
import Style from "./Style";

const Post = forwardRef(
  ({ profile, username, timestamp, description, fileType, fileData }, ref) => {
    const classes = Style();

    return (
      <Paper ref={ref} className={classes.post}>
        <div className={classes.post__header}>
          <Avatar src={profile} />
          <div className={classes.header__info}>
            <h4>{username}</h4>
            <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
          </div>
          <MoreHorizOutlinedIcon />
        </div>

        <div className={classes.post__body}>
          {fileData && (
            <div className={classes.body__image}>
              {fileType === "image" ? (
                <img src={fileData} alt="post" />
              ) : (
                <ReactPlayer url={fileData} controls={true} />
              )}
            </div>
          )}

          <div className={classes.body__description}>
            <p>{description}</p>
          </div>
        </div>
      </Paper>
    );
  }
);

export default Post;
