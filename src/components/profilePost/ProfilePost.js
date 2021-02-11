import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Style from "./Style";
import Google from "../../assets/images/google.png";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";

const ProfilePost = ({ post }) => {
  const classes = Style();
  const { fullName } = useSelector((state) => state.currentUser);
  return (
    <Link to={`/${fullName}/post?id=${post.id}`} className={classes.post} key={post.id}>
      <img className={classes.img} src={post.media.url} alt="post" />
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
