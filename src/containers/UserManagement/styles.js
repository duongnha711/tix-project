import { makeStyles } from "@material-ui/core/styles";
import {
  textDefaultColor,
  bookingBackground,
  activeTitleColor,
} from "./../../commons/theme";

const useStyles = makeStyles((theme) => ({
  wrapperUser: {
    backgroundImage: "url('/images/bg-login.jpg')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: 550,
  },
  container: {
    width: 870,
    margin: "0 auto",
    padding: "50px 0",

    display: "flex",
  },

  controlUser: {
    width: 300,
    maxHeight: 220,
    minHeight: 220,

    marginRight: 20,

    color: textDefaultColor,

    background: bookingBackground,

    "& .MuiListItem-root": {
      // justifyContent: "center",
    },
  },
  title: {
    color: activeTitleColor,
  },
  homePage: {
    color: activeTitleColor,
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
    // minHeight: 472,
    maxHeight: 472,
    overflowY: "auto",
    msOverflowStyle: "none" /* Internet Explorer 10+ */,
    scrollbarWidth: "none" /* Firefox */,
    "&::-webkit-scrollbar": {
      display: "none" /* Safari and Chrome */,
    },

    flexGrow: 1,

    color: textDefaultColor,

    background: bookingBackground,
  },

  link: {
    textDecoration: "none",
    color: textDefaultColor,
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
