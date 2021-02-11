import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Style from "./Style";
import Google from "../../assets/images/google.png";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";

const ProfilePost = () => {
  const classes = Style();
  const { fullName } = useSelector((state) => state.currentUser);
  return (
    <Link to={`/${fullName}/post`} className={classes.post}>
      <img className={classes.img} src={Google} alt="post" />
      <span className={classes.overlay}></span>
      <div className={classes.stats}>
        <Heart style={{ fill: "white" }} />
        <p>5</p>
      </div>
    </Link>
  );
};

export default ProfilePost;
