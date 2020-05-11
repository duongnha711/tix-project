import { makeStyles } from "@material-ui/core/styles";
import { primaryColor } from "./../../../../commons/theme";

const useStyles = makeStyles((theme) => ({
  banner: {
    position: "relative",
  },
  containerFluid: {
    position: "relative",

    cursor: "pointer",

    "& .MuiSvgIcon-colorPrimary": {
      fontSize: 50,
    },
    // custom arrow
    "& .slick-next": {
      right: 30,
      zIndex: 99,
      "&::before": {
        display: "none",
      },
      "& img": {
        width: "100%",
      },
    },

    "& .slick-prev": {
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
      display: "inline-block",
      width: "unset",
      left: "50%",
      transform: "translate(-50%)",
    },
    "& .slick-dots li button:before ": {
      fontSize: 15,
    },
    "& .slick-dots li button:before": {
      color: "#867171",
      opacity: 1,
    },
    "& .slick-dots li.slick-active button:before": {
      color: primaryColor,
    },
    "& .slick-dots li:hover button:before": {
      color: primaryColor,
    },
  },
  
  iconPlay: {
    // display: "none",
    opacity: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate( -50%,-50%)",
    zIndex: 99,

    background: "#2b27276e",

    border: `2px solid ${primaryColor}`,
    borderRadius: "50%",
    textAlign: "center",

    width: 80,
    height: 80,
    "& .MuiSvgIcon-colorPrimary": {
      fontSize: 50,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
    },

    cursor: "pointer",
    transition: "all 0.1s linear",
    "& img": {
      width: "100%",
    },
    "&:hover": {
      transform: "translate( -50%,-50%) scale(1.1)",
    },
  },



  wrapperImg: {
    width: "100%", // kích thước width mong muốn
    position: "relative",
    "&:hover span ": {
      // display: "block",
      opacity: 1,
    },
  },
  contentImg: {
    paddingTop: "40%", // dựa theo width thẻ bọc nó
    position: "relative",
    "& img": {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  },
  [theme.breakpoints.down("960")]: {
    containerFluid: {
      "& .slick-dots": {
        bottom: 10,
      },
    },
  },
  [theme.breakpoints.down("760")]: {
    containerFluid: {
      "& .MuiSvgIcon-colorPrimary": {
        fontSize: 30,
      },
      // custom arrow
      "& .slick-next": {
        right: 15,
      },
    },
    iconPlay: {
      width: 40,
      height: 40,
      "& .MuiSvgIcon-colorPrimary": {
        fontSize: 20,
      },
    },
  },
}));

export default useStyles;
