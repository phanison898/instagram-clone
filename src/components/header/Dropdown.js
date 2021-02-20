import React from "react";
import { Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/config";
import { ReactComponent as Profile } from "../../assets/icons/profile.svg";
import { ReactComponent as Saved } from "../../assets/icons/saved.svg";
import { ReactComponent as Settings } from "../../assets/icons/settings.svg";
import { ReactComponent as Switch } from "../../assets/icons/switch.svg";
import Style from "./Style";

const Dropdown = ({ path, uid, onClick }) => {
  const classes = Style();
  return (
    <Paper className={classes.dropdown}>
      <div className={classes.arrow} />

      <Link to={`${path}/profile?id=${uid}`} className={classes.option} onClick={onClick}>
        <Profile />
        <p>Profile</p>
      </Link>

      <div className={classes.option} onClick={onClick}>
        <Saved />
        <p>Saved</p>
      </div>

      <div className={classes.option} onClick={onClick}>
        <Settings />
        <p>Settings</p>
      </div>

      <div className={classes.option} onClick={onClick}>
        <Switch />
        <p>Switch Account</p>
      </div>

      <div className={classes.option} onClick={() => auth.signOut()}>
        <p>Logout</p>
      </div>
    </Paper>
  );
};

export default Dropdown;
