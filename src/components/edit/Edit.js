import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Avatar } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { uploadMediaFile } from "../../util/file-handling";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import db from "../../firebase/config";
import { GetCurrentUserData } from "../../store/actions/auth";
import { UpdateCurrentUserData } from "../../store/actions/users";
import { LoadingAction } from "../../store/actions/util";
import Style from "./Style";
import Loading from "../util/animations/Loading";

const Edit = () => {
  const classes = Style();
  const dispatch = useDispatch();
  const history = useHistory();

  const { fullName, profilePic, username, uid, bio } = useSelector((state) => state.currentUser);

  const [_profilePic, setProfilePic] = useState(profilePic);
  const [_fullName, setFullName] = useState(fullName);
  const [_username, setUsername] = useState(username);
  const [_bio, setBio] = useState(bio);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(LoadingAction(true));
    db.collection("users")
      .doc(uid)
      .update({
        profilePic: _profilePic,
        fullName: _fullName,
        username: _username,
        bio: _bio,
      })
      .then(() => {
        dispatch(GetCurrentUserData());
        dispatch(UpdateCurrentUserData());
        dispatch(LoadingAction(false));
      })
      .catch((error) => alert(error.message));
  };

  const isEntered = () => {
    if (
      _profilePic !== profilePic ||
      _fullName !== fullName ||
      _username !== username ||
      _bio !== bio
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.goBack__button}>
        <KeyboardBackspaceIcon onClick={() => history.goBack()} />
      </div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.form__header}>
          <Avatar src={_profilePic} />
          <input
            id="profile-pic"
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => uploadMediaFile(e, setProfilePic)}
          />
          <label htmlFor="profile-pic">Change Profile Photo</label>
          {_profilePic !== profilePic && (
            <HighlightOffIcon onClick={() => setProfilePic(profilePic)} />
          )}
        </div>

        <div className={classes.form__input}>
          <p>Full Name</p>
          <input
            placeholder="Full name"
            value={_fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className={classes.form__input}>
          <p>User Name</p>
          <input
            placeholder="Username"
            value={_username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className={classes.form__input}>
          <p>Bio</p>
          <input placeholder="Bio" value={_bio} onChange={(e) => setBio(e.target.value)} />
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
      <Loading />
    </div>
  );
};

export default Edit;
