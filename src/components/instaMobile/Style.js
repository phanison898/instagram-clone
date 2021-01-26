import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mobile: {
    display: "flex",

    // Insta mobile picture: the parent image
    "& > img": {
      objectFit: "contain",
      height: "100%",
    },
  },

  mobile__slider: {
    width: "64%",
    height: "69.5%",
    position: "absolute",
    right: 21,
    bottom: 90,
    zIndex: 10,
    overflow: "hidden",

    "& > img": {
      position: "absolute",
      top: 0,
      objectFit: "contain",
      height: "100%",
    },

    //
    // children images order
    // -------------------------
    // child-5 image is at top of the stack (visible first)
    // ... 4
    // ... 3
    // ... 2
    // child-1 image is at bottom of the stack (visible last)
    //

    "& > img:nth-child(1)": {
      animation: "$img1 30s ease-in-out infinite",
    },
    "& > img:nth-child(2)": {
      animation: "$img2 30s ease-in-out infinite",
    },
    "& > img:nth-child(3)": {
      animation: "$img3 30s ease-in-out infinite",
    },
    "& > img:nth-child(4)": {
      animation: "$img4 30s ease-in-out infinite",
    },
    "& > img:nth-child(5)": {
      animation: "$img5 30s ease-in-out infinite",
    },
  },

  //Child-Image-1 => Fade-In Fade-Out keyframes
  "@keyframes img1": {
    "0%": {
      opacity: 1,
    },
    "80.04%": {
      opacity: 1,
    },
    "93.38%": {
      opacity: 1,
    },
    "100%": {
      opacity: 1,
    },
  },

  //Child-Image-2 => Fade-In Fade-Out keyframes
  "@keyframes img2": {
    "0%": {
      opacity: 1,
    },
    "60.03%": {
      opacity: 1,
    },
    "73.37%": {
      opacity: 1,
    },
    "80.04%": {
      opacity: 0,
    },
    "100%": {
      opacity: 0,
    },
  },

  //Child-Image-3 => Fade-In Fade-Out keyframes
  "@keyframes img3": {
    "0%": {
      opacity: 1,
    },
    "40.02%": {
      opacity: 1,
    },
    "53.36%": {
      opacity: 1,
    },
    "60.03%": {
      opacity: 0,
    },
    "100%": {
      opacity: 0,
    },
  },

  //Child-Image-4 => Fade-In Fade-Out keyframes
  "@keyframes img4": {
    "0%": {
      opacity: 1,
    },
    "20.01%": {
      opacity: 1,
    },
    "33.35%": {
      opacity: 1,
    },
    "40.02%": {
      opacity: 0,
    },
    "100%": {
      opacity: 0,
    },
  },

  //Child-Image-5 => Fade-In Fade-Out keyframes
  "@keyframes img5": {
    "0%": {
      opacity: 1,
    },
    "13.4%": {
      opacity: 1,
    },
    "20.01%": {
      opacity: 0,
    },
    "93.38%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
}));
