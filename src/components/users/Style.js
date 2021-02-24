import { makeStyles } from "@material-ui/core/styles";
import { secondary } from "../../assets/Colors";

export default makeStyles((theme) => ({
  root: {
    width: 600,
    minHeight: "calc(100vh - 56px)",
    display: "flex",
    flexDirection: "column",
    paddingTop: 40,

    [theme.breakpoints.down("xs")]: {
      paddingTop: 0,
      width: "100%",
    },

    "& > p": {
      padding: 5,
    },
  },

  header: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: 5,
    "& > P": {
      marginLeft: 10,
    },
  },

  users: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: 10,
    border: 0,
    boxShadow: "none",
    borderRadius: 0,
    border: `1px solid ${secondary}`,

    [theme.breakpoints.down("xs")]: {
      border: 0,
    },

    "& > p": {
      width: "100%",
      height: 100,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "grey",
    },
  },
}));
