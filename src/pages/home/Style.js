import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  home: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px 0",
    backgroundColor: "#fafafa",
  },

  home__body: {
    maxHeight: 700,
    display: "flex",
  },

  body__left: {
    position: "relative",
    width: 400,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  body__right: {
    width: 350,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },

  home__footer: {
    width: 700,
    height: 100,
    marginTop: 40,
    display: "flex",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));
