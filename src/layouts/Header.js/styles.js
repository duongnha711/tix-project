import { makeStyles } from "@material-ui/core/styles";
import * as theme from "../../commons/theme";
import { primaryColor, blackColor, greyColor } from "../../commons/theme";

const useStyles = makeStyles({
  topHeader: {
    background: "rgba(255,255,255,.95)",
    position: "sticky",
    padding: "7px 15px",
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
      color: blackColor,
    },
    "& a:hover": {
      color: primaryColor,
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
  logo: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  location: {
    display: "flex",
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
});
export default useStyles;
