import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";
import { handleImage } from "../../util/file-handling";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import BlockIcon from "@material-ui/icons/Block";
import Style from "./Style";

const Edit = () => {
  const classes = Style();
  const { photoURL, displayName, email } = useSelector((state) => state.user);

  const [profilePic, setProfilePic] = useState("");
  const [name, setName] = useState(displayName);
  const [username, setUsername] = useState(email.split("@")[0]);
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
            onChange={(e) => handleImage(e, setProfilePic)}
          />
          <label for="profile-pic">Change Profile Photo</label>
          {profilePic && <HighlightOffIcon onClick={() => setProfilePic("")} />}
        </div>

        <div className={classes.form__input}>
          <p>Name</p>
          <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className={classes.form__input}>
          <p>User Name</p>
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
