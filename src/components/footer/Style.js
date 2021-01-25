import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  footer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  footer__links: {
    width: "100%",
    flex: 1,
    display: "flex",
    justifyContent: "center",

    "& > p": {
      fontSize: 13,
      margin: "0 10px",
      color: "grey",
      cursor: "pointer",
    },
  },
}));
