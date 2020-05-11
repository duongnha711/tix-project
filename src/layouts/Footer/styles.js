import { makeStyles } from "@material-ui/core/styles";
import { backGroundHeader, textDefaultColor } from "./../../commons/theme";

const useStyles = makeStyles((theme) => ({
  footer: {
    background: backGroundHeader,
    color: textDefaultColor,
  },

  container: {
    width: "70%",
    margin: "0 auto",
    "& .MuiDivider-root": {
      background: "rgba(246, 241, 241, 0.08)",
    },
  },
  [theme.breakpoints.down("490")]: {
    container: {
      width: "95%",
    },
  },
}));

export default useStyles;
