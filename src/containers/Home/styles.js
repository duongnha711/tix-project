import { makeStyles } from "@material-ui/core/styles";
import { primaryColor, activeTitleColor } from "./../../commons/theme";

const useStyles = makeStyles((theme) => ({
  wrapperTitle: {
    padding: "80px 0 40px 0",
  },
  newsTitle: {
    cursor: "pointer",
    color: primaryColor,
    "&:hover": {
      color: activeTitleColor,
    },
  },
  activeMarvelDC: {
    color: activeTitleColor,
  },
  activeTime: {
    color: activeTitleColor,
  },
}));

export default useStyles;
