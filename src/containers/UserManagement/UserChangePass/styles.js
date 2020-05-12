import { makeStyles } from "@material-ui/core/styles";
import { activeTitleColor } from "./../../../commons/theme";

const useStyles = makeStyles(() => ({
  input: {
    display: "block",
    "& .MuiInputBase-input": {
      color: "black",
      borderRadius: 4,
      background: "white",
    },
    "& .MuiFormHelperText-contained": {
      margin: 0,
    },
  },
  button: {
    marginTop: 10,
  },
  title: {
    color: activeTitleColor,
  },
}));

export default useStyles;
