import { makeStyles } from "@material-ui/core/styles";
// import * as themeColor from "./../../../../commons/theme";

const useStyles = makeStyles((theme) => ({
  container: {
    width: 950,
    margin: "0 auto",
    padding: 15,
    display: "flex",

    position: "absolute",
    top: -5,
    left: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: 100,
  },
  wrapperSelect: {
    display: "flex",
  },
  nameSelect: {
    width: 280,
    marginRight: 10,
  },
  branchSelect: {
    width: 230,
    marginRight: 10,
  },
  dateSelect: {
    width: 120,
    marginRight: 10,
  },
  hourSelect: {
    width: 110,
    marginRight: 10,
  },
  [theme.breakpoints.down("980")]: {
    container: {
      width: "80%",
      display: "block",
      position: "unset",
      top: "unset",
      left: "unset",
      transform: "unset",
    },
    nameSelect: {
      width: "100%",
      marginBottom: 10,
    },
    branchSelect: {
      width: "100%",
      marginBottom: 10,
    },
    dateSelect: {
      width: "100%",
      marginBottom: 10,
    },
    hourSelect: {
      width: "100%",
      marginBottom: 10,
    },
    button: {
      textAlign: "center",
    },
  },
  [theme.breakpoints.down("610")]: {
    wrapperSelect: {
      display: "block",
    },
  },
}));

export default useStyles;
