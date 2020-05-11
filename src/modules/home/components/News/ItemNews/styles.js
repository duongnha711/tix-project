import { makeStyles } from "@material-ui/core/styles";
import { greyColor, themeGradientPrimary } from "../../../../../commons/theme";

const useStyles = makeStyles((theme) => ({
  containerItem: {
    background: themeGradientPrimary,
    borderRadius: 4,
    overflow: "hidden",
  },
  wrapperText: {
    padding: 10,
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
    color: greyColor,
  },
  icon: {
    marginRight: 20,
    display: "flex",
    alignItems: "center",
    "& svg": {
      marginRight: 5,
    },
  },
  wrapperImg: {
    // width: 217, // kích thước width mong muốn
  },
  contentImg: {
    paddingTop: "60%", // dựa theo width thẻ bọc nó
    position: "relative",
    "& img": {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  },
}));

export default useStyles;
