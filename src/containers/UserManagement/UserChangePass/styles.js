import { makeStyles } from "@material-ui/core/styles";
// import * as themeColor from "./../../../commons/theme";

const useStyles = makeStyles(() => ({
  input: {
    display: "block",
    "& .MuiOutlinedInput-notchedOutline": {
      background: "white",
    },
  },
  button: {
    marginTop: 30,
  },
}));

export default useStyles;
