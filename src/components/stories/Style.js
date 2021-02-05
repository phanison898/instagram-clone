import { makeStyles } from "@material-ui/core/styles";
import { secondary } from "../../assets/Colors";

const Style = makeStyles((theme) => ({
  stories: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    padding: 5,
    boxShadow: "none",
    border: `1px solid ${secondary}`,
    borderRadius: 5,

    [theme.breakpoints.down("xs")]: {
      borderRadius: 0,
      border: 0,
    },
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
