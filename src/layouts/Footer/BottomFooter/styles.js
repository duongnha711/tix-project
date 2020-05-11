import { makeStyles } from "@material-ui/core/styles";
import {
  textDefaultColor,
  themeGradientPrimary,
} from "./../../../commons/theme";

const useStyles = makeStyles((theme) => ({
  bottomFooter: {
    padding: "15px 0",
  },
  address: {
    margin: "0 15px",
    color: textDefaultColor,
    "& a": {
      color: textDefaultColor,
      textDecoration: "none",
    },
  },
  title: {
    background: themeGradientPrimary,

    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
  },
}));

export default useStyles;
