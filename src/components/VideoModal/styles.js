import { makeStyles } from "@material-ui/core/styles";
// import { primaryColor } from "./../../../../commons/theme";

const useStyles = makeStyles((theme) => ({
  video: {
    "& .MuiDialog-paperWidthSm": {
      maxWidth: "unset",
      overflow: "unset",
    },
  },
  videoControl: {
    width: 560,
    height: 315,
  },
  iconCancel: {
    position: "absolute",
    top: -14,
    right: -14,
    zIndex: 50,
    color: "white",
    fontSize: 30,
    cursor: "pointer",
  },

  [theme.breakpoints.down("650")]: {
    videoControl: {
      width: 392,
      height: 220,
    },
  },

  [theme.breakpoints.down("460")]: {
    videoControl: {
      width: 308,
      height: 164,
    },
  },
}));

export default useStyles;
