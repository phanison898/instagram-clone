import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  home: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: 0,
    boxShadow: "none",
    borderRadius: 0,
  },

  body: {
    width: 960,
    display: "flex",
    justifyContent: "center",

    [theme.breakpoints.down("md")]: {
      width: 900,
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));
