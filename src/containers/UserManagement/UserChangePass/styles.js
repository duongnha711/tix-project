import { makeStyles } from "@material-ui/core/styles";
// import * as themeColor from "./../../../commons/theme";

const useStyles = makeStyles(() => ({
  input: {
    display: "block",
    "& .MuiInputBase-input": {
      background: "white",
      borderRadius: 4,
    },
  },
  button: {
    marginTop: 30,
  },
}));

export default useStyles;
