import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";
import { uploadMediaFile } from "../../util/file-handling";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import db from "../../firebase";
import Style from "./Style";

const Edit = () => {
  const classes = Style();
  const { displayName, photoURL, username } = useSelector((state) => state.user);

  const [profilePic, setProfilePic] = useState("");
  const [name, setName] = useState("");
  const [updatedUsername, setUpdatedUsername] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.form__header}>
          <Avatar src={profilePic || photoURL} />
          <input
            id="profile-pic"
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => uploadMediaFile(e, setProfilePic)}
          />
          <label htmlFor="profile-pic">Change Profile Photo</label>
          {profilePic && <HighlightOffIcon onClick={() => setProfilePic("")} />}
        </div>

        <div className={classes.form__input}>
          <p>Name</p>
          <input
            placeholder="Name"
            value={name || displayName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={classes.form__input}>
          <p>User Name</p>
          <input
            placeholder="Username"
            value={updatedUsername || username}
            onChange={(e) => setUpdatedUsername(e.target.value)}
          />
        </div>

        <div className={classes.form__input}>
          <p>Bio</p>
          <input placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)} />
        </div>

        <button type="submit" className={classes.form__button}>
          Update
        </button>
      </form>
    </div>
  );
};

export default Edit;
