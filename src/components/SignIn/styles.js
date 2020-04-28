import { makeStyles } from "@material-ui/core/styles";
import * as themeColor from "./../../commons/theme";

const useStyles = makeStyles((theme) => ({
  signUp: {
    "& .MuiDialog-paper": {
      background: themeColor.signUpColor,
      color: themeColor.whiteColor,
      opacity: 0.9,
      width: 425,
      height: 500,
    },
    "& .MuiOutlinedInput-root": {
      background: themeColor.whiteColor,
    },
    "& .MuiCheckbox-root": {
      color: themeColor.primaryColor,
    },
  },
  iconClose: {
    fontSize: 30,
    color: themeColor.primaryColor,
    position: "absolute",
    top: 0,
    right: 0,
    cursor: "pointer"
  },
  email: {
    marginBottom: 10,
  },
  submit: {
    margin: "20px 0",
  },
  [theme.breakpoints.down("440")]: {
    signUp: {
      "& .MuiGrid-container": {
        display: "block",
      },
    },
  },
}));

export default useStyles;
