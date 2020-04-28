import { makeStyles } from "@material-ui/core/styles";
import * as themeColor from "./../../../../commons/theme";

const useStyles = makeStyles((theme) => ({
  infoCinema: {
    paddingTop: 50,
  },
  container: {
    width: "70%",
    margin: "0 auto",
  },
  cinemaWrapper: {
    display: "flex",
  },
  listLogo: {
    minWidth: 90,
    borderRight: "1px solid rgba(0,0,0,0.12)",
  },
  itemLogo: {
    padding: 20,
    cursor: "pointer",
    "& img": {
      width: "50px",
    },
  },
  listCinema: {
    minWidth: 282,
    borderRight: "1px solid rgba(0,0,0,0.12)",
  },
  itemCinema: {
    display: "flex",
    alignItems: "center",
    padding: 20,
    cursor: "pointer",
  },
  contentCinema: {
    flexGrow: 1,
    marginLeft: 5,
    "& p, h6": {
      display: "-webkit-box",
      WebkitLineClamp: 1,
      WebkitBoxOrient: "vertical",
      textOverflow: "ellipsis",
      overflow: "hidden",
    },
    "& span": {
      color: themeColor.primaryColor,
    },
  },
  listMovie: {
    flexGrow: 1,
    overflow: "hidden",
  },
  itemMovie: {
    padding: "20px",
    display: "flex",
    cursor: "pointer",
  },
  imgMovie: {
    overflow: "hidden",
    height: 155,
    minWidth: 107,
    "& img": {
      width: "100%",
    },
  },
  contentMovie: {
    flexGrow: 1,
    marginLeft: 10,
  },
  tag: {
    background: themeColor.tagColor,
    border: `1px solid ${themeColor.tagBorderColor}`,
    padding: "2px 4px",
    borderRadius: 4,
    marginRight: 10,
    color: themeColor.primaryColor,
  },
  titleMovie: {
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",
    margin: "10px 0",
  },
  textMovie: {
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  time: {
    display: "flex",
    color: themeColor.greyColor,
  },
  timeView: {
    display: "flex",
    alignItems: "center",
    marginRight: 10,
  },
  [theme.breakpoints.down("1140")]: {
    container: {
      width: "90%",
    },
  },
  [theme.breakpoints.down("850")]: {
    cinemaWrapper: {
      display: "block",
    },
    listCinema: {
      flexGrow: 1,
      minWidth: 0,
      borderRight: "none",
    },
    listLogo: {
      minWidth: 0,
    },
  },
}));

export default useStyles;
