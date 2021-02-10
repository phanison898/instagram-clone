import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Avatar, Paper } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { InstaTextLogo } from "../../assets/images";
import { ReactComponent as Home } from "../../assets/icons/home.svg";
import { ReactComponent as Explor } from "../../assets/icons/explor.svg";
import { ReactComponent as Profile } from "../../assets/icons/profile.svg";
import { ReactComponent as Saved } from "../../assets/icons/saved.svg";
import { ReactComponent as Settings } from "../../assets/icons/settings.svg";
import { ReactComponent as Switch } from "../../assets/icons/switch.svg";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { ToggleTheme } from "../../store/actions/util";
import { auth } from "../../firebase";
import Style from "./Style";

const Header = ({ path }) => {
  const classes = Style();

  const dispatch = useDispatch();

  const { profilePic, uid } = useSelector((state) => state.currentUser);

  const { theme } = useSelector((state) => state.util);

  const [isDrapdownOpen, setIsDrapdownOpen] = useState(false);

  const toggleDropDown = () => {
    setIsDrapdownOpen(!isDrapdownOpen);
  };

  const Dropdown = () => {
    return (
      <Paper className={classes.dropdown}>
        <div className={classes.arrow} />
        <Link to={`${path}/profile?id=${uid}`} className={classes.option} onClick={toggleDropDown}>
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
      </Paper>
    );
  };

  return (
    <Paper className={classes.root}>
      <nav className={classes.header}>
        <Link to={`${path}`} className={classes.header__logo}>
          <img src={InstaTextLogo} alt="instagram-logo" />
        </Link>

        <div className={classes.header__search}>
          <section>
            <SearchIcon />
          </section>
          <input placeholder="Search" disabled />
        </div>

        <div className={classes.header__nav}>
          <Link to={`${path}`} className={classes.nav__link}>
            <Home />
          </Link>

          <Link to={`${path}/users`} className={classes.nav__link}>
            <Explor />
          </Link>

          <Link to={`${path}/create`} className={classes.nav__link}>
            <AddCircleIcon />
          </Link>

          <div className={classes.nav__link} onClick={() => dispatch(ToggleTheme())}>
            {theme ? <Brightness4Icon /> : <BrightnessHighIcon />}
          </div>

          <div className={classes.nav__link}>
            <Avatar src={profilePic} onClick={toggleDropDown} />
          </div>

          {isDrapdownOpen && <Dropdown />}
        </div>
      </nav>
    </Paper>
  );
};

export default Header;
