import { makeStyles } from "@material-ui/core/styles";
import { activeTitleColor } from "./../../../commons/theme";

const useStyles = makeStyles((theme) => ({
  title: {
    color: activeTitleColor,
  },
}));

export default useStyles;
