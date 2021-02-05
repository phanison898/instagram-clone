import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  feed: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingTop: 30,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 0,
    },
  },

  main: {
    width: 620,
    height: "100%",

    [theme.breakpoints.down("sm")]: {
      width: 580,
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      flex: 1,
    },
  },

  stories: {
    width: "100%",
    height: 100,
    marginBottom: 20,

    [theme.breakpoints.down("xs")]: {
      marginBottom: 0,
    },
  },

  posts: {
    width: "100%",
    height: "auto",
  },

  sidebar: {
    flex: 1,
    padding: 10,
    paddingLeft: 30,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
