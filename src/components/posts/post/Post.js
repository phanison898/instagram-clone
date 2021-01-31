import React, { forwardRef, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import { ReactComponent as Inbox } from "../../../assets/icons/inbox.svg";
import { ReactComponent as Heart } from "../../../assets/icons/heart.svg";
import { ReactComponent as Chat } from "../../../assets/icons/chat.svg";
import { ReactComponent as Saved } from "../../../assets/icons/saved.svg";
import { ReactComponent as Smile } from "../../../assets/icons/smile.svg";
import ReactPlayer from "react-player";
import Style from "./Style";

const Post = forwardRef(
  ({ profile, username, timestamp, description, fileType, fileData }, ref) => {
    const classes = Style();

    const [play, setPlay] = useState(false);
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
    };

    return (
      <Paper ref={ref} className={classes.post}>
        <div className={classes.post__header}>
          <Avatar src={profile} />
          <div className={classes.header__info}>
            <h4>{username}</h4>
          </div>
          <MoreHorizOutlinedIcon />
        </div>

        <div className={classes.post__media}>
          {fileData && (
            <div className={classes.media__image} onClick={() => setPlay(!play)}>
              {fileType === "image" ? (
                <img src={fileData} alt="post" />
              ) : (
                <ReactPlayer url={fileData} playing={play} />
              )}
            </div>
          )}
        </div>

        <div className={classes.post__reactions}>
          <Heart />
          <Chat />
          <Inbox />
          <Saved />
        </div>

        <div className={classes.post__likes}>
          <p>{334555} likes</p>
        </div>

        <div className={classes.post__description}>
          <p>
            <span>{username}</span> {description}
          </p>
        </div>

        <div className={classes.post__comments}>
          <p>View all {555} comments</p>
          <div>
            <h4>honeylaw</h4>
            <p>nice post phani...keep it up</p>
            <Heart />
          </div>
          <div>
            <h4>honeylaw</h4>
            <p>nice post phani...keep it up</p>
            <Heart />
          </div>
        </div>

        <div className={classes.post__time}>4 Hours ago</div>

        <form className={classes.post__comment__box} onSubmit={handleSubmit}>
          <Smile />
          <input
            placeholder="enter a comment"
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit">Post</button>
        </form>
      </Paper>
    );
  }
);

export default Post;
