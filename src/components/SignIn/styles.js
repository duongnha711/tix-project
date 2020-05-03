import { makeStyles } from "@material-ui/core/styles";
import * as themeColor from "./../../commons/theme";

const useStyles = makeStyles((theme) => ({
  signIn: {
    "& .MuiDialog-paper": {
      background: themeColor.signUpColor,
      color:  themeColor.labelForm,
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
    "& .MuiFormHelperText-contained ": {
      margin: 0,
    },
    "& .MuiOutlinedInput-input": {
      padding: "15.5px 14px",
    },
  },
  iconClose: {
    fontSize: 30,
    color: themeColor.primaryColor,
    position: "absolute",
    top: 0,
    right: 0,
    cursor: "pointer",
  },
  userName: {
    marginBottom: 10,
  },
  submit: {
    margin: "20px 0",
  },
  link: {
    cursor: "pointer",
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