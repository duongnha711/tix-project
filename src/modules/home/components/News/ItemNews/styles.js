import { makeStyles } from "@material-ui/core/styles";
import * as themeColor from "./../../../../../commons/theme";

const useStyles = makeStyles((theme) => ({
  containerItem: {
    cursor: "pointer",
  },
  item: {
    overflow: "hidden",
    "& img": {
      width: "100%",
      display: "block",
    },
  },
  title: {
    minHeight: 52,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  content: {
    minHeight: 63,
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  likeComment: {
    display: "flex",
    color: themeColor.greyColor,
  },
  icon: {
    marginRight: 20,
    display: "flex",
    alignItems: "center",
    "& svg": {
      marginRight: 5,
    },
  },
}));

export default useStyles;
