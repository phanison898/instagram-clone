import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: 10,
  },

  usermedia: {
    position: "relative",
    width: "100%",
    maxHeight: 300,
    border: "1px solid lightgrey",

    "& > img": {
      objectFit: "cover",
      height: "100%",
      width: "100%",
    },

    "& > video": {
      width: "100%",
      height: "100%",
    },
  },
}));
