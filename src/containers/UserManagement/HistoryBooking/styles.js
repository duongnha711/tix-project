import { makeStyles } from "@material-ui/core/styles";
// import * as themeColor from "./../../commons/theme";

const useStyles = makeStyles(() => ({
  container: {
    padding: 20,
  },
  wrapperItem: {
    display: "block",
  },
  itemBooked: {
    border: "1px solid white",
    marginBottom: 10,
    borderRadius: 4,

    padding: 20,
  },
}));

export default useStyles;
