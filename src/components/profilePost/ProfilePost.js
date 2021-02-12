import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Style from "./Style";
import ImageIcon from "@material-ui/icons/Image";
import VideocamIcon from "@material-ui/icons/Videocam";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";

const ProfilePost = ({ post }) => {
  const classes = Style();
  const { fullName } = useSelector((state) => state.currentUser);
  return (
    <Link to={`/${fullName}/post?id=${post.id}`} className={classes.post} key={post.id}>
      {post.media.type === "image" ? (
        <>
          <img className={classes.img} src={post.media.url} alt="post" />
          <ImageIcon className={classes.icon} />
        </>
      ) : (
        <>
          <video className={classes.img} width="300" height="150">
            <source src={`${post.media.url}#t=0.1`} />
          </video>
          <VideocamIcon className={classes.icon} />
        </>
      )}
      <span className={classes.overlay}></span>
      <div className={classes.stats}>
        <Heart style={{ fill: "white" }} />
        <p>5</p>
      </div>
      <span className={classes.description_overlay}></span>
      <p className={classes.description}>{post.description}</p>
    </Link>
  );
};

export default ProfilePost;
