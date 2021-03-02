import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
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
import { FetchPostComments, FetchPostLikes, AddCommentToPost } from "../../firebase/funtions";

const DetailedPost = (props) => {
  const classes = Style();
  const dispatch = useDispatch();
  const history = useHistory();

  const params = new URLSearchParams(props.location.search);
  const postID = params.get("id");

  const { queryUser } = useSelector((state) => state);
  const { users } = useSelector((state) => state.users);
  const { fullName } = useSelector((state) => state.currentUser);
  const [post, setPost] = useState({});
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
    queryUser.posts.map((post) => post.id === postID && setPost(post));
  }, [postID]);

  useEffect(() => {
    FetchPostLikes(post.uid, post.id, setLikes);
    FetchPostComments(post.uid, post.id, setComments);
  }, [post]);

  return (
    <div className={classes.container}>
      {/* Go back button */}
      <div className={classes.goBackBtn}>
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
          <div className={classes.post__details__header}>
            <Avatar src={queryUser.profilePic} />
            <h4>{queryUser.fullName}</h4>
            <MoreHorizOutlinedIcon />
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

          <div className={classes.post__details__comments}>
            {comments.map((_comment, i) => (
              <div key={i} className={classes.post__details__description}>
                <Avatar src={users?.find((user) => user.uid === _comment.uid)?.profilePic} />
                <main>
                  <header>
                    <Link to={`/${fullName}/profile?id=${_comment.uid}`}>{_comment.fullName}</Link>{" "}
                    {_comment.comment}
                  </header>
                  <footer>
                    <ReactTimeago date={new Date(_comment?.timestamp?.toDate()).toUTCString()} />
                  </footer>
                </main>
              </div>
            ))}
          </div>

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
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              type="submit"
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
