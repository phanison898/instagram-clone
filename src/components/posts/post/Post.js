import React, { forwardRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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
import { Like, UnLike } from "../../../store/actions/likes";
import { FetchPostComments, FetchPostLikes, AddCommentToPost } from "../../../firebase/funtions";

const Post = forwardRef(({ post }, ref) => {
  const classes = Style();
  const dispatch = useDispatch();
  const history = useHistory();

  const { fullName, uid } = useSelector((state) => state.currentUser);

  const [play, setPlay] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [isLiked, setIsLiked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    AddCommentToPost({
      postOwnerUID: post.uid,
      postId: post.id,
      commentedBy: fullName,
      comment: comment,
    });
    setComment("");
  };

  const toggleLikeButton = () => {
    if (isLiked) {
      dispatch(UnLike(post.id, post.uid));
      setIsLiked(false);
    } else {
      dispatch(Like(post.id, post.uid));
      setIsLiked(true);
    }
  };

  useEffect(() => {
    const isLikedByCurrentUser = likes?.some((_like) => _like === uid);
    setIsLiked(isLikedByCurrentUser);
  }, [likes]);

  useEffect(() => {
    FetchPostLikes(post.uid, post.id, setLikes);
    FetchPostComments(post.uid, post.id, setComments);
  }, [post]);

  return (
    <Paper ref={ref} className={classes.post}>
      {/* Post header */}
      <div className={classes.post__header}>
        <Avatar
          src={post?.profilePic}
          onClick={() => history.push(`/${fullName}/profile?id=${post.uid}`)}
        />
        <div className={classes.header__info}>
          <Link to={`/${fullName}/profile?id=${uid}`}>{post?.username}</Link>
        </div>
        <MoreHorizOutlinedIcon />
      </div>

      {/* Post media */}
      <div className={classes.post__media}>
        {/* <Heart style={{ display: isLiked ? "block" : "none" }} /> */}
        {post?.media?.url && (
          <div className={classes.media__container} onClick={() => setPlay(!play)}>
            {post?.media?.type === "image" ? (
              <img
                src={post?.media?.url}
                alt="post"
                loading="lazy"
                onDoubleClick={toggleLikeButton}
              />
            ) : (
              <ReactPlayer url={post?.media?.url} playing={play} />
            )}
          </div>
        )}
      </div>

      {/* Post reactions (icons) */}
      <div className={classes.post__reactions}>
        <Heart fill={isLiked ? "red" : ""} onClick={toggleLikeButton} />
        <Chat />
        <Inbox />
        <Saved />
      </div>

      {/* Post likes count */}
      <div className={classes.post__likes}>
        <p>{likes?.length} likes</p>
      </div>

      {/* Post description */}
      <div className={classes.post__description}>
        <p>
          <Link to={`/${fullName}/profile?id=${post.uid}`}>{post?.username}</Link>{" "}
          {post?.description}
        </p>
      </div>

      {/* Post comments */}
      <div className={classes.post__comments}>
        {comments?.length !== 0 && <p>View all {comments?.length} comments</p>}
        {comments?.map(
          (_comment, i) =>
            i < 2 && (
              <div key={_comment.uid} className={classes.post__comment}>
                <Link to={`/${fullName}/profile?id=${uid}`}>{_comment.fullName}</Link>
                <p>{_comment.comment}</p>
                <span>
                  <ReactTimeago
                    date={new Date(_comment?.timestamp?.toDate()).toUTCString()}
                    units="minute"
                  />
                </span>
              </div>
            )
        )}
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
