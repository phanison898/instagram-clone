import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Avatar from "@material-ui/core/Avatar";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import { ReactComponent as Inbox } from "../../assets/icons/inbox.svg";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";
import { ReactComponent as Chat } from "../../assets/icons/chat.svg";
import { ReactComponent as Saved } from "../../assets/icons/saved.svg";
import { ReactComponent as Smile } from "../../assets/icons/smile.svg";
import ReactTimeago from "react-timeago";
import ReactPlayer from "react-player";
import Style from "./Style";
import { Like, UnLike } from "../../store/actions/likes";
import { FetchPostComments, FetchPostLikes } from "../../firebase/funtions";

const DetailedPost = (props) => {
  const classes = Style();
  const history = useHistory();
  const dispatch = useDispatch();
  const params = new URLSearchParams(props.location.search);
  const postID = params.get("id");

  const { queryUser } = useSelector((state) => state);
  const [post, setPost] = useState({});
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [isLiked, setIsLiked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // upload to firestore
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
    queryUser.posts.map((post) => post.id === postID && setPost(post));
  }, [postID]);

  useEffect(() => {
    FetchPostLikes(post.uid, post.id, setLikes);
    FetchPostComments(post.uid, post.id, setComments);
  }, [post]);

  return (
    <div className={classes.root}>
      <div className={classes.goBack__button}>
        <KeyboardBackspaceIcon onClick={() => history.goBack()} />
      </div>
      <div className={classes.post}>
        <div className={classes.post__media}>
          {post?.media?.type === "image" ? (
            <img src={post?.media?.url} alt="post" className={classes.media__image} />
          ) : (
            <ReactPlayer url={post?.media?.url} controls={true} className={classes.media__video} />
          )}
        </div>
        <div className={classes.post__details}>
          <div className={classes.details__header}>
            <Avatar src={queryUser.profilePic} />
            <h4>{queryUser.fullName}</h4>
            <MoreHorizOutlinedIcon />
          </div>
          <div className={classes.details__description}>
            <div className={classes.description__header}>
              <Avatar src={queryUser.profilePic} />
              <h4>{queryUser.fullName}</h4>
              <p>
                <ReactTimeago
                  date={new Date(post?.timestamp?.toDate()).toUTCString()}
                  units="minute"
                />
              </p>
            </div>
            <p>{post.description}</p>
          </div>
          <div className={classes.details__reactions_2}>
            <div>
              <Heart />
              <p>{likes?.length} Likes</p>
            </div>
            <p>
              <ReactTimeago
                date={new Date(post?.timestamp?.toDate()).toUTCString()}
                units="minute"
              />
            </p>
          </div>
          <div className={classes.details__comments}></div>
          <div className={classes.details__reactions}>
            <div>
              <Heart fill={isLiked ? "red" : ""} onClick={toggleLikeButton} />
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
            <p>{likes?.length} Likes</p>
            <p>
              <ReactTimeago
                date={new Date(post?.timestamp?.toDate()).toUTCString()}
                units="minute"
              />
            </p>
          </div>

          <form className={classes.details__comment_box} onSubmit={handleSubmit}>
            <Smile />
            <input
              placeholder="Add a comment"
              name="comment"
              value={comment}
              autoComplete="off"
              disabled
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              type="submit"
              disabled
              //disabled={comment === ""}
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
