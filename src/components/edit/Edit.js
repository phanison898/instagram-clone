import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Avatar } from "@material-ui/core";
import { uploadMediaFile } from "../../util/file-handling";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import db from "../../firebase";
import { UploadProfilePic } from "../../util/firestore";
import { LoginAction } from "../../store/actions/auth";
import Style from "./Style";

const Edit = () => {
  const classes = Style();
  const dispatch = useDispatch();
  const { displayName, photoURL, username, uid } = useSelector((state) => state.user);

  const [profilePic, setProfilePic] = useState(photoURL);
  const [name, setName] = useState(displayName);
  const [updatedUsername, setUpdatedUsername] = useState(username);
  const [bio, setBio] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    db.collection("users")
      .doc(uid)
      .update({
        photoURL: profilePic,
        displayName: name,
        username: updatedUsername,
      })
      .then(() => {
        dispatch(LoginAction(uid));
      })
      .catch((error) => alert(error.message));
  };

  const isEntered = () => {
    if (profilePic !== photoURL || name !== displayName || updatedUsername !== username) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.form__header}>
          <Avatar src={profilePic} />
          <input
            id="profile-pic"
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => uploadMediaFile(e, setProfilePic)}
          />
          <label htmlFor="profile-pic">Change Profile Photo</label>
          {profilePic !== photoURL && <HighlightOffIcon onClick={() => setProfilePic(photoURL)} />}
        </div>

        <div className={classes.form__input}>
          <p>Name</p>
          <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className={classes.form__input}>
          <p>User Name</p>
          <input
            placeholder="Username"
            value={updatedUsername}
            onChange={(e) => setUpdatedUsername(e.target.value)}
          />
        </div>

        <div className={classes.form__input}>
          <p>Bio</p>
          <input placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)} />
        </div>

        <button
          type="submit"
          disabled={!isEntered()}
          style={{
            backgroundColor: isEntered() ? "#0095f6" : "rgb(0 149 246 / 30%)",
            cursor: isEntered() ? "pointer" : "auto",
          }}
          className={classes.form__button}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Edit;
