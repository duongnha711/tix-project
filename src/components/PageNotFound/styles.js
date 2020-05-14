import { makeStyles } from "@material-ui/core/styles";
import { themeGradientSecond, themeGradientPrimary } from "../../commons/theme";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: "url('/images/pageNotFound.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: 600,
    position: "relative",
  },

  button: {
    position: "absolute",
    bottom: "20%",
    left: "50%",
    transform: "translateX(-50%)",
    color: "white",
    "& .MuiButton-containedSecondary": {
      background: themeGradientSecond,
      transition: "all 10s linear",
    },
    "& .MuiButton-containedSecondary:hover": {
      background: themeGradientPrimary,
    },
  },
  // [theme.breakpoints.down("1025")]: {
  //   container: {
  //     height: 400,
  //   },
  //   button: {
  //     bottom: "15%",
  //   },
  // },
  // [theme.breakpoints.down("769")]: {
  //   container: {
  //     height: 300,
  //   },
  //   button: {
  //     bottom: "10%",
  //   },
  // },
}));

export default useStyles;
