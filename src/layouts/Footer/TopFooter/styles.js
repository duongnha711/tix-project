import { makeStyles } from "@material-ui/core/styles";
import * as themeColor from "./../../../commons/theme";

const useStyles = makeStyles((theme) => ({
  information: {
    padding: "40px 0",
  },
  tix: {
    display: "flex",
    color: themeColor.greyColor,
    "& .MuiTypography-subtitle1": {
      lineHeight: 2.5,
    },
  },
  tixText: {
    marginRight: 20,
  },
  title: {
    marginBottom: 10,
  },
  partner: {
    maxWidth: 300,
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    marginRight: 20,
  },

  app: {
    display: "flex",
  },
  mobile: {
    marginRight: 100,
    "& img": {
      marginRight: 20,
    },
  },
  social: {
    "& img": {
      marginRight: 20,
    },
  },
  [theme.breakpoints.down("1230")]: {
    partner: {
      maxWidth: 260,
    },
    mobile: {
      marginRight: 50,
    },
  },
  [theme.breakpoints.down("1140")]: {
    tixText: {
      display: "none",
    },
  },
  [theme.breakpoints.down("940")]: {
    partner: {
      display: "none",
    },
  },
  [theme.breakpoints.down("580")]: {
    mobile: {
      marginRight: 10,
    },
  },
}));

export default useStyles;
