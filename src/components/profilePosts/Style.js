import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  usermedia: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
  },

  usermedia__header: {
    display: "flex",
    alignItems: "center",
    "& > *": {
      margin: 2,
    },
  },

  usermedia__body: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    "& > div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& > *": {
        margin: 15,
      },
    },
  },

  media__row: {
    width: "100%",
  },

  media__post: {
    objectFit: "cover",
    width: "100%",
    maxHeight: 300,
  },
}));
