import { makeStyles } from "@material-ui/core/styles";
import { primaryColor, blackColor } from "../../commons/theme";

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
  ava: {
    width: 30,
    height: 30,
    fontSize: 15,
    marginRight: 10,
    lineHeight: 30,
    backgroundColor: "#024b9ed1",
  },
  link: {
    "& a": {
      textDecoration: "none",
      color: blackColor,
    },
  },
}));

export default useStyles;
