import { makeStyles } from "@material-ui/core/styles";
import {
  themeGradientPrimary,
  themeGradientSecond,
  backGroundGlobal,
} from "./../../commons/theme";

const useStyles = makeStyles((theme) => ({
  global: {
    background: backGroundGlobal,
    "& .MuiButton-containedPrimary": {
      background: themeGradientPrimary,
      transition: "all 10s linear",
    },
    "& .MuiButton-containedPrimary:hover": {
      background: themeGradientSecond,
    },

    "& .MuiButton-containedSecondary": {
      background: themeGradientSecond,
      transition: "all 10s linear",
    },
    "& .MuiButton-containedSecondary:hover": {
      background: themeGradientPrimary,
    },
  },
}));

export default useStyles;
