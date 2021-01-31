import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  feed: {
    minWidth: 960,
    [theme.breakpoints.down("md")]: {
      minWidth: 850,
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      minWidth: "auto",
      padding: "0 10px",
    },
    height: "auto",
    display: "flex",
    paddingTop: 30,
  },

  main: {
    width: 620,
    height: "100%",
  },

  stories: {
    width: "100%",
    height: 100,
    marginBottom: 20,
  },

  posts: {
    width: "100%",
    height: "auto",
  },

  sidebar: {
    position: "relative",
    flex: 1,
    height: "100%",
  },
}));
