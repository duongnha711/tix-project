import { makeStyles } from "@material-ui/core/styles";
import { primaryColor } from "./../../../../commons/theme";

const useStyles = makeStyles((theme) => ({
  containerFluid: {
    position: "relative",
    "& img": {
      width: "99%",
      margin: "0 auto",
    },
    cursor: "pointer",
    "&:hover span ": {
      display: "block",
    },

    // custom arrow
    "& .slick-next": {
      width: 50,
      height: 50,
      right: 10,
      zIndex: 99,
      "&::before": {
        display: "none",
      },
      "& img": {
        width: "100%",
      },
    },

    "& .slick-prev": {
      width: 50,
      height: 50,
      left: 10,
      zIndex: 99,
      "&::before": {
        display: "none",
      },
      "& img": {
        width: "100%",
      },
    },

    //custom dots
    "& .slick-dots": {
      bottom: 55,
    },
    "& .slick-dots li button:before ": {
      fontSize: 15,
    },
    "& .slick-dots li button:before": {
      color: primaryColor,
    },
    "& .slick-dots li.slick-active button:before": {
      color: primaryColor,
    },
    "& .slick-dots li:hover button:before": {
      color: primaryColor,
    },
  },
  iconPlay: {
    display: "none",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate( -50%,-50%)",
    zIndex: 99,
    width: 80,
    height: 80,
    cursor: "pointer",
    transition: "all 0.1s linear",
    "& img": {
      width: "100%",
    },
    "&:hover": {
      transform: "translate( -50%,-50%) scale(1.1)",
    },
  },
  [theme.breakpoints.down("960")]: {
    containerFluid: {
      "& .slick-dots": {
        bottom: 10,
      },
    },
  },
}));

export default useStyles;
