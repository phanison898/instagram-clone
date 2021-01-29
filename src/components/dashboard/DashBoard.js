import React from "react";
import Style from "./Style";

const DashBoard = () => {
  const classes = Style();
  return (
    <div className={classes.dashboard}>
      <h2>Hello 👋 </h2>
    </div>
  );
};

export default DashBoard;
