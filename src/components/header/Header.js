import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { InstaTextLogo } from "../../assets/images";
import { ReactComponent as Home } from "../../assets/icons/home.svg";
import { ReactComponent as Inbox } from "../../assets/icons/inbox.svg";
import { ReactComponent as Explor } from "../../assets/icons/explor.svg";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";
import { ReactComponent as Profile } from "../../assets/icons/profile.svg";
import { ReactComponent as Saved } from "../../assets/icons/saved.svg";
import { ReactComponent as Settings } from "../../assets/icons/settings.svg";
import { ReactComponent as Switch } from "../../assets/icons/switch.svg";
import { auth } from "../../firebase";
import Style from "./Style";

const Header = (props) => {
  const classes = Style();
  const { url, path } = props.match;

  const user = useSelector((state) => state.user);
  const photoURL = user?.photoURL;

  const [isDrapdownOpen, setIsDrapdownOpen] = useState(false);

  const toggleDropDown = () => {
    setIsDrapdownOpen(!isDrapdownOpen);
  };

  const Dropdown = () => {
    return (
      <div className={classes.dropdown}>
        <div className={classes.arrow} />
        <Link to={`${path}/profile`} className={classes.option} onClick={toggleDropDown}>
          <Profile />
          <p>Profile</p>
        </Link>
        <div className={classes.option} onClick={toggleDropDown}>
          <Saved />
          <p>Saved</p>
        </div>
        <div className={classes.option} onClick={toggleDropDown}>
          <Settings />
          <p>Settings</p>
        </div>
        <div className={classes.option} onClick={toggleDropDown}>
          <Switch />
          <p>Switch Account</p>
        </div>
        <div className={classes.option} onClick={() => auth.signOut()}>
          <p>Logout</p>
        </div>
      </div>
    );
  };

  return (
    <div className={classes.header}>
      <nav className={classes.nav}>
        <img className={classes.logo} src={InstaTextLogo} alt="instagram-logo" />
        <div className={classes.search}>
          <SearchIcon />
          <input placeholder="Search" />
        </div>
        <div className={classes.links}>
          <Link to={`${path}`} className={classes.link}>
            <Home />
          </Link>
          <div className={classes.link}>
            <Inbox />
          </div>
          <div className={classes.link}>
            <Explor />
          </div>
          <div className={classes.link}>
            <Heart />
          </div>
          <div className={classes.link}>
            <Avatar src={photoURL} onClick={toggleDropDown} />
          </div>
          {isDrapdownOpen && <Dropdown />}
        </div>
      </nav>
    </div>
  );
};

export default Header;
