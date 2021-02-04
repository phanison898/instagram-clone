import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Avatar, TextField } from "@material-ui/core";
import imageCompression from "browser-image-compression";
import Style from "./Style";

const Edit = () => {
  const classes = Style();
  const { photoURL, displayName, email } = useSelector((state) => state.user);

  const [profilePic, setProfilePic] = useState(photoURL);
  const [name, setName] = useState(displayName);
  const [username, setUsername] = useState(email.split("@")[0]);

  const handleFile = async (e) => {
    const inputFile = e.target.files[0];

    const fileSize = inputFile.size / (1024 * 1024);

    if (fileSize > 3) {
      e.target.value = "";
      return alert("select an image less than 3MB size");
    }

    let compressedInputFile = inputFile;

    const compressionOptions = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    try {
      compressedInputFile = await imageCompression(inputFile, compressionOptions);
    } catch (error) {
      alert(error);
    }

    let inputFileDataBase64;
    const file = new FileReader();
    if (compressedInputFile) {
      file.onloadend = (fileLoadedEvent) => {
        inputFileDataBase64 = fileLoadedEvent.target.result;
        setProfilePic(inputFileDataBase64);
      };
      file.readAsDataURL(compressedInputFile);
    }

    // clear the file input event value
    e.target.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Avatar src={profilePic} />
        <label for="profile-pic">Change Profile Photo</label>
        <input id="profile-pic" type="file" accept="image/*" hidden onChange={handleFile} />
        <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Edit;
