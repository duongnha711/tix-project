import { makeStyles } from "@material-ui/core/styles";
import * as themeColor from "./../../../commons/theme";

const useStyles = makeStyles((theme) => ({
  bottomFooter: {
    display: "flex",
    padding: "30px 0",
  },
  address: {
    flexGrow: 1,
    margin: "0 15px",
    color: themeColor.greyColor,
    "& a": {
      color: themeColor.primaryColor,
      textDecoration: "none",
    },
  },
  title: {
    color: themeColor.whiteColor,
  },
  [theme.breakpoints.down("810")]: {
    bottomFooter: {
      display: "block",
    },
    address: {
      margin: "20px 0",
    },
  },
}));

export default useStyles;
