import { makeStyles } from "@material-ui/core/styles";
import {
  activeTitleColor,
  primaryColor,
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
    height: 700,
    position: "relative",
  },

  signUp: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    background: signUpInBackground,
    borderRadius: 4,
    width: 425,

    // "& .MuiOutlinedInput-root": {
    //   background: whiteColor,
    // },
    // "& .MuiCheckbox-root": {
    //   color: primaryColor,
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
  iconClose: {
    fontSize: 30,
    color: primaryColor,
    position: "absolute",
    top: 0,
    right: 0,
    cursor: "pointer",
  },
  userName: {
    marginBottom: 10,
  },
  email: {
    marginBottom: 10,
  },
  password: {
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
    signUp: {
      width: "90%",
    },
  },
}));

export default useStyles;
