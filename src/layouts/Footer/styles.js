import { makeStyles } from "@material-ui/core/styles";
import * as themeColor from "./../../commons/theme";

const useStyles = makeStyles((theme) => ({
  footer: {
    background: themeColor.footerColor,
    color: themeColor.whiteColor,
  },
  container: {
    width: "70%",
    margin: "0 auto",
    "& .MuiDivider-root": {
      background: "rgba(246, 241, 241, 0.08)",
    },
  },
}));

export default useStyles;
