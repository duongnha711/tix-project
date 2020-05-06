import { makeStyles } from "@material-ui/core/styles";
import * as themeColor from "./../../commons/theme";

const useStyles = makeStyles((theme) => ({
  wrapperUser: {
    backgroundImage: "url('/images/backApp.jpg')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  container: {
    width: 870,
    margin: "0 auto",
    padding: "80px 0",

    display: "flex",
  },

  controlUser: {
    width: 300,
    maxHeight: 220,
    marginRight: 20,

    color: themeColor.whiteColor,

    background: themeColor.signUpColor,
    opacity: 0.9,

    boxShadow: "0 2px 2px 0 rgba(223, 173, 173, 0.2), 0 5px 10px 0 #d8d8d8",

    "& .MuiListItem-root": {
      // justifyContent: "center",
    },
  },

  itemControl: {
    transition: "all 0.2s linear",
    cursor: "pointer",
    "&:hover": {
      // background: "red",
      transform: "translateX(30px)",
    },
  },

  infoUser: {
    minHeight: 460,
    maxHeight: 460,
    overflow: "auto",
    flexGrow: 1,

    color: themeColor.whiteColor,

    background: themeColor.signUpColor,
    opacity: 0.9,

    boxShadow: "0 2px 2px 0 rgba(223, 173, 173, 0.2), 0 5px 10px 0 #d8d8d8",
  },

  link: {
    textDecoration: "none",
    color: themeColor.whiteColor,
  },

  [theme.breakpoints.down("920")]: {
    container: {
      width: "90%",
    },
    controlUser: {
      width: 200,
    },
  },

  active: {
    transform: "translateX(30px)",
  },

  [theme.breakpoints.down("570")]: {
    container: {
      display: "block",
      width: "75%",
    },
    controlUser: {
      width: "100%",
      marginBottom: 20,
    },
  },
}));

export default useStyles;
