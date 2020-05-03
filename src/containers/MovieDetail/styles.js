import { makeStyles } from "@material-ui/core/styles";
import * as themeColor from "./../../commons/theme";

const useStyles = makeStyles((theme) => ({
  movieDetail: {
    backgroundImage: "url('/images/backApp.jpg')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  container: {
    width: 870,
    margin: "0 auto",
    color: themeColor.whiteColor,
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
    // background: themeColor.primaryColor,
    // opacity: 0.5
  },

  infoEvaluate: {
    display: "flex",
    justifyContent: "center",
    margin: "80px 0 40px 0",
  },
  info: {
    marginRight: 30,
    cursor: "pointer",
    transition: "all 0.1s linear",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  evaluate: {
    cursor: "pointer",
    transition: "all 0.1s linear",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  text: {
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  textContent: {
    marginTop: 10,
    display: "-webkit-box",
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },

  [theme.breakpoints.down("900")]: {
    container: {
      width: "90%",
    },
  },
  [theme.breakpoints.down("670")]: {
    textDetail: {
      "& img": {
        width: 150,
      },
    },
    starDetail: {
      display: "none",
    },
  },
  [theme.breakpoints.down("450")]: {
    textDetail: {
      "& img": {
        width: 100,
      },
    },
    titleMovie: {
      fontSize: 14,
    },
  },
}));

export default useStyles;