import { makeStyles } from "@material-ui/core/styles";
// import { primaryColor } from "./../../../../commons/theme";

const useStyles = makeStyles((theme) => ({
  video: {
    "& .MuiDialog-paperWidthSm": {
      maxWidth: "unset",
      overflow: "unset",
    },
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
}));

export default useStyles;
