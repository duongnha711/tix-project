import { makeStyles } from "@material-ui/core/styles";
import {
  activeTitleColor,
  signUpInBackground,
  themeGradientPrimary,
  themeGradientSecond,
} from "./../../commons/theme";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: "url('/images/bg-login.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: 600,
    position: "relative",
  },
  signIn: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    background: signUpInBackground,
    borderRadius: 4,

    width: 425,
    // "& .MuiOutlinedInput-root": {
    // background: textDefaultColor,
    // },
    "& .MuiFormHelperText-contained ": {
      margin: 0,
    },
    "& .MuiOutlinedInput-input": {
      padding: "15.5px 14px",
    },
    "& .MuiDialogContent-root:first-child": {
      paddingBottom: 20,
    },

    "& .MuiButton-containedSecondary": {
      background: themeGradientSecond,
      transition: "all 10s linear",
    },
    "& .MuiButton-containedSecondary:hover": {
      background: themeGradientPrimary,
    },
  },

  userName: {
    marginBottom: 10,
  },
  submit: {
    margin: "20px 0",
  },
  link: {
    cursor: "pointer",
    color: activeTitleColor,
  },
  [theme.breakpoints.down("440")]: {
    signIn: {
      width: "90%",
    },
  },
}));

export default useStyles;
