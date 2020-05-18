import { makeStyles } from "@material-ui/core/styles";
import { primaryColor } from "./../../commons/theme";

const useStyles = makeStyles((theme) => ({
  container: {
    "& .MuiDialog-paperWidthSm": {
      maxWidth: "unset",
      width: "80%",
      color: primaryColor,
    },
  },

  wrapperRating: {
    color: primaryColor,
  },

  button: {
    margin: 10,
  },
}));

export default useStyles;
