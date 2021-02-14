import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToggleTheme } from "../../store/actions/util";
import { InstaTextLogo } from "../../assets/images";
import { Avatar, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ReactComponent as Home } from "../../assets/icons/home.svg";
import { ReactComponent as Explor } from "../../assets/icons/explor.svg";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import SearchIcon from "@material-ui/icons/Search";
import Dropdown from "./Dropdown";
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

          {isDrapdownOpen && <Dropdown path={path} uid={uid} onClick={toggleDropDown} />}
        </div>
      </nav>
    </Paper>
  );
};

export default Header;
