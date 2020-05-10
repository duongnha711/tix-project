import { makeStyles } from "@material-ui/core/styles";
// import * as themeColor from "./../../commons/theme";

const useStyles = makeStyles((theme) => ({
  username: {
    minWidth: 100,
    cursor: "pointer",
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
    textDecoration: "none",
    color: "inherit",
  },
}));

export default useStyles;
