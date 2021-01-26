import React from "react";
import { auth } from "../../firebase";
import Style from "./Style";

const DashBoard = (props) => {
  const classes = Style();
  return (
    <div className={classes.dashboard}>
      <h2>Hello 👋 {props.match.params.username}</h2>
      <p>🔥 Instagram clone is in progress.....</p>
      <button onClick={() => auth.signOut()}>Logout</button>
    </div>
  );
};

export default DashBoard;
