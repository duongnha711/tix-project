import { makeStyles } from "@material-ui/core/styles";
import { backGroundHeader, borderColorSecondary, greyColor, themeGradientPrimary, themeGradientSecond } from "../../commons/theme";

const useStyles = makeStyles((theme) => ({
  topHeader: {
    background: backGroundHeader,
    position: "sticky",
    padding: "10px 50px",
    top: 0,
    zIndex: 999,
  },
  navigation: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    "& a": {
      textDecoration: "none",
      marginRight: 20,
      background: themeGradientPrimary,

      WebkitTextFillColor: "transparent",
      WebkitBackgroundClip: "text",
      fontWeight: "bold",
      transition: "all 0.2s linear",
    },
    "& a:hover": {
      background: themeGradientSecond,

      WebkitTextFillColor: "transparent",
      WebkitBackgroundClip: "text",
    },
  },
  login: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "&>div": {
      justifyContent: "flex-end",
      color: greyColor,
    },
  },
  wrarperLogo: {
    display: "flex",
    alignItems: "center",
  },

  logo: {
    fontSize: 25,
    cursor: "pointer",
    "& a": {
      textDecoration: "none",
      background: themeGradientPrimary,

      WebkitTextFillColor: "transparent",
      WebkitBackgroundClip: "text",
    },
  },

  myCV: {
    border: `1px solid ${borderColorSecondary}`,
    display: "flex",
    borderRadius: 4,
    height: 25,
    padding: 3,
    alignItems: "center",
    cursor: "pointer",
    marginLeft: 20,
    "& a": {
      textDecoration: "none",
      fontWeight: "bold",
      background: themeGradientSecond,

      WebkitTextFillColor: "transparent",
      WebkitBackgroundClip: "text",
    },
  },

  button: {
    marginRight: 10,
  },
  iconMenu: {
    cursor: "pointer",
    "&:hover": {
      color: theme.primaryColor,
    },
  },
  "@global": {
    html: {
      scrollBehavior: "smooth",
    },
  },
}));
export default useStyles;
