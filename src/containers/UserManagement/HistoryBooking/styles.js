import { makeStyles } from "@material-ui/core/styles";
import { activeTitleColor, primaryColor } from "./../../../commons/theme";

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
  title: {
    color: activeTitleColor,
  },
  nameMovie: {
    color: primaryColor,
    fontSize: 16,
  },
}));

export default useStyles;
