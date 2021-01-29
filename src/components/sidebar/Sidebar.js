import React from "react";
import Style from "./Style";

const Sidebar = () => {
  const classes = Style();
  return <div className={classes.sidebar}></div>;
};

export default Sidebar;
