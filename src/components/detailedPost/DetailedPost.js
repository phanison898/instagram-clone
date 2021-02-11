import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import ReactTimeago from "react-timeago";
import ReactPlayer from "react-player";
import { ReactComponent as Inbox } from "../../assets/icons/inbox.svg";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";
import { ReactComponent as Chat } from "../../assets/icons/chat.svg";
import { ReactComponent as Saved } from "../../assets/icons/saved.svg";
import { ReactComponent as Smile } from "../../assets/icons/smile.svg";
import Style from "./Style";

const DetailedPost = () => {
  const classes = Style();

  const fileType = "image";
  const fileData = "https://wallpapercave.com/wp/wp4470749.jpg";

  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.root}>
      <div className={classes.post}>
        <div className={classes.post__media}>
          {fileType === "image" ? (
            <img src={fileData} alt="post" className={classes.media__image} />
          ) : (
            <ReactPlayer url={fileData} controls={true} className={classes.media__video} />
          )}
        </div>
        <div className={classes.post__details}>
          <div className={classes.details__header}>
            <Avatar src={""} />
            <h4>{"phanison"}</h4>
            <MoreHorizOutlinedIcon />
          </div>
          <div className={classes.details__reactions_2}>
            <div>
              <Heart />
              <p>55 Likes</p>
            </div>
            <p>December 19, 2020</p>
          </div>
          <div className={classes.details__comments}></div>
          <div className={classes.details__reactions}>
            <div>
              <Heart />
            </div>
            <div>
              <Chat />
            </div>
            <div>
              <Inbox />
            </div>
            <div>
              <Saved />
            </div>
          </div>
          <div className={classes.details__stats}>
            <p>55 Likes</p>
            <p>December 19, 2020</p>
          </div>

          <form className={classes.details__comment_box} onSubmit={handleSubmit}>
            <Smile />
            <input
              placeholder="Add a comment"
              name="comment"
              value={comment}
              autoComplete="off"
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              type="submit"
              disabled={comment === ""}
              style={comment !== "" ? { color: "#0095f6", cursor: "pointer" } : {}}
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DetailedPost;
