import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  feed: {
    width: "100%",
    display: "flex",
    paddingTop: 30,
  },

  main: {
    width: 620,
    height: "100%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      flex: 1,
    },
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
    flex: 1,
    padding: 10,
    paddingLeft: 30,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));
