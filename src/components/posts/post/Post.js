import React, { forwardRef, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import { ReactComponent as Inbox } from "../../../assets/icons/inbox.svg";
import { ReactComponent as Heart } from "../../../assets/icons/heart.svg";
import { ReactComponent as Chat } from "../../../assets/icons/chat.svg";
import { ReactComponent as Saved } from "../../../assets/icons/saved.svg";
import { ReactComponent as Smile } from "../../../assets/icons/smile.svg";
import ReactPlayer from "react-player";
import ReactTimeago from "react-timeago";
import Style from "./Style";

const Post = forwardRef(({ post }, ref) => {
  const classes = Style();
  const history = useHistory();

  const { fullName } = useSelector((state) => state.currentUser);

  const [play, setPlay] = useState(false);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Paper ref={ref} className={classes.post}>
      {/* Post header */}
      <div className={classes.post__header}>
        <Avatar
          src={post?.profilePic}
          onClick={() => history.push(`/${fullName}/profile?id=${post.uid}`)}
        />
        <div className={classes.header__info}>
          <h4>{post?.username}</h4>
        </div>
        <MoreHorizOutlinedIcon />
      </div>

      {/* Post media */}
      <div className={classes.post__media}>
        {post?.media?.url && (
          <div className={classes.media__container} onClick={() => setPlay(!play)}>
            {post?.media?.type === "image" ? (
              <img src={post?.media?.url} alt="post" />
            ) : (
              <ReactPlayer url={post?.media?.url} playing={play} />
            )}
          </div>
        )}
      </div>

      {/* Post reactions (icons) */}
      <div className={classes.post__reactions}>
        <Heart />
        <Chat />
        <Inbox />
        <Saved />
      </div>

      {/* Post likes count */}
      <div className={classes.post__likes}>
        <p>{334555} likes</p>
      </div>

      {/* Post description */}
      <div className={classes.post__description}>
        <p>
          <span>{post?.username}</span> {post?.description}
        </p>
      </div>

      {/* Post comments */}
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

      {/* Post uploaded timeago */}
      <div className={classes.post__time}>
        <ReactTimeago date={new Date(post?.timestamp?.toDate()).toUTCString()} units="minute" />
      </div>

      {/* comment form */}
      <form className={classes.post__comment__box} onSubmit={handleSubmit}>
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
    </Paper>
  );
});

export default Post;
