import { makeStyles } from "@material-ui/core/styles";
import {
  primaryColor,
  whiteColor,
  activeTitleColor,
} from "./../../commons/theme";

const useStyles = makeStyles((theme) => ({
  movieDetail: {
    backgroundImage: "url('/images/backApp.jpg')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: 900,
  },
  container: {
    width: 870,
    margin: "0 auto",
    color: whiteColor,
    padding: "80px 0",
  },

  topDetail: {
    display: "flex",
  },
  textDetail: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
  },

  wrapperImg: {
    position: "relative",
    width: 217,
    border: `2px solid transparent`,

    borderRadius: 4,
    overflow: "hidden",
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",

    "&:hover span": {
      display: "block",
    },
    "&:hover": {
      border: `2px solid ${primaryColor}`,
    },
  },
  overLay: {
    background: "rgba(12, 96, 247, 0.89)",
    opacity: 0.3,

    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 99,
    display: "none",
  },
  contentImg: {
    paddingTop: "143%",
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

  titleMovie: {
    margin: "10px 0",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  ageType: {
    backgroundColor: "#fb4226",
    borderRadius: 4,
    padding: "0 5px",
    color: "#fff",
    minWidth: 33,
    textAlign: "center",
  },
  starDetail: {
    textAlign: "center",
  },
  circle: {
    width: 126,
    height: 126,
    lineHeight: "126px",
    fontSize: 50,
    borderRadius: "50%",
    background: "#1a252b87",
    // background: primaryColor,
    // opacity: 0.5
  },

  infoEvaluate: {
    display: "flex",
    justifyContent: "center",
    margin: "50px 0 40px 0",
  },
  info: {
    color: primaryColor,
    marginRight: 30,
    cursor: "pointer",
    transition: "all 0.2s linear",
    "&:hover": {
      transform: "scale(1.2)",
      color: activeTitleColor,
    },
  },
  evaluate: {
    color: primaryColor,

    cursor: "pointer",
    transition: "all 0.2s linear",
    "&:hover": {
      transform: "scale(1.2)",
      color: activeTitleColor,
    },
  },
  activeTitle: {
    transform: "scale(1.2)",
    color: activeTitleColor,
  },

  button: {
    marginTop: 10,
  },

  iconPlay: {
    display: "none",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate( -50%,-50%)",
    zIndex: 99,

    background: "#2b27276e",

    border: `2px solid ${primaryColor}`,
    borderRadius: "50%",
    textAlign: "center",

    width: 50,
    height: 50,
    "& .MuiSvgIcon-colorPrimary": {
      fontSize: 30,
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

  [theme.breakpoints.down("900")]: {
    container: {
      width: "90%",
    },
  },
  [theme.breakpoints.down("670")]: {
    wrapperImg: {
      width: 150,
    },
    starDetail: {
      display: "none",
    },
  },
  [theme.breakpoints.down("450")]: {
    wrapperImg: {
      width: 100,
    },
    titleMovie: {
      fontSize: 14,
    },
  },
}));

export default useStyles;
