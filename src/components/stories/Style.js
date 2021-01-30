import { makeStyles } from "@material-ui/core/styles";

const Style = makeStyles((theme) => ({
  stories: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    padding: 5,
    backgroundColor: "white",
    border: "1px solid rgba(219,219,219,1)",
    borderRadius: 5,
  },

  story: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 5px",
    "& > .MuiAvatar-root": {
      width: 64,
      height: 64,
    },
    "& > p": {
      fontSize: 12,
      marginTop: 5,
    },
  },
}));

export default Style;
