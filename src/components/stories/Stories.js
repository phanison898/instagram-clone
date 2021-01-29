import React from "react";
import Style from "./Style";

const Header = () => {
  const classes = Style();
  return <div className={classes.header}></div>;
};

export default Header;
