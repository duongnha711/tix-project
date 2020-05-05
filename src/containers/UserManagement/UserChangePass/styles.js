import { makeStyles } from "@material-ui/core/styles";
// import * as themeColor from "./../../../commons/theme";

const useStyles = makeStyles(() => ({
  input: {
    display: "block",
    "& .MuiInputBase-input": {
      background: "white",
      borderRadius: 4,
    },
    "& .MuiFormHelperText-contained": {
      margin: 0,
    },
  },
  button: {
    marginTop: 10,
  },
}));

export default useStyles;
