import { makeStyles } from "@material-ui/core/styles";
import { primaryColor } from "../../commons/theme";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: 240,
  },
  wrapperAccount: {
    display: "flex",
    justifyContent: "space-between",
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: 10,
  },
  account: {
    display: "flex",
    alignItems: "center",
  },
  iconClose: {
    cursor: "pointer",
    "&:hover": {
      color: primaryColor,
    },
  },
}));

export default useStyles;
