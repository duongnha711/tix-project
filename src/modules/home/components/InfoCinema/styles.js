import { makeStyles } from "@material-ui/core/styles";
import { backgroundInfoCinema, primaryColor, textDefaultColor } from "./../../../../commons/theme";

const useStyles = makeStyles((theme) => ({
  infoCinema: {
    paddingTop: 50,
  },
  container: {
    width: "70%",
    margin: "0 auto",
    background: backgroundInfoCinema,
  },
  cinemaWrapper: {
    display: "flex",
    color: textDefaultColor,
  },
  listLogo: {
    minWidth: 90,
    borderRight: "1px solid rgba(0,0,0,0.12)",
    maxHeight: 600,
    overflowY: "auto",
  },
  itemLogo: {
    padding: 20,
    cursor: "pointer",
    opacity: 0.3,
    transition: "all 0.1s linear",
    "&:hover": {
      opacity: 1,
    },

    "& img": {
      width: "50px",
    },
  },
  activeLogo: {
    opacity: 1,
  },
  listCinema: {
    width: 282,
    borderRight: "1px solid rgba(0,0,0,0.12)",
    maxHeight: 600,
    overflowY: "auto",
    msOverflowStyle: "none" /* Internet Explorer 10+ */,
    scrollbarWidth: "none" /* Firefox */,
    "&::-webkit-scrollbar": {
      display: "none" /* Safari and Chrome */,
    },
  },
  itemCinema: {
    display: "flex",
    alignItems: "center",
    padding: 20,
    cursor: "pointer",
    opacity: 0.3,
    transition: "all 0.1s linear",
    "&:hover": {
      opacity: 1,
    },
  },
  activeCinema: {
    opacity: 1,
  },
  contentCinema: {
    flexGrow: 1,
    marginLeft: 5,
    "& h6": {
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      textOverflow: "ellipsis",
      overflow: "hidden",
    },
    "& p": {
      display: "-webkit-box",
      WebkitLineClamp: 1,
      WebkitBoxOrient: "vertical",
      textOverflow: "ellipsis",
      overflow: "hidden",
    },
    "& span": {
      color: primaryColor,
    },
  },
  listMovie: {
    flexGrow: 1,
    maxHeight: 600,
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  itemMovie: {
    padding: "20px",
    display: "flex",
  },

  wrapperImg: {
    width: 107, // kích thước width mong muốn
    borderRadius: 4,
    overflow: "hidden",
  },
  contentImg: {
    paddingTop: "143%", // dựa theo width thẻ bọc nó
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
  contentMovie: {
    flexGrow: 1,
    marginLeft: 10,
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
    color: primaryColor,
  },
  timeView: {
    display: "flex",
    alignItems: "center",
    marginRight: 10,
  },
  timeDetail: {
    marginRight: 10,
    marginBottom: 5,
    cursor: "pointer",
    border: "1px solid",
    padding: 5,
    borderRadius: 4,
  },
  listDate: {
    padding: 20,
    paddingBottom: 0,
  },
  dateMovie: {
    marginRight: 10,
    marginBottom: 5,
    cursor: "pointer",
    border: "1px solid",
    padding: 5,
    borderRadius: 4,
  },
  activeDate: {
    color: primaryColor,
  },

  viewMore: {
    display:"inline-block",
    color: "#f66161",
    cursor: "pointer",
    marginBottom: 10,
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
  },
  [theme.breakpoints.down("460")]: {
    listLogo: {
      minWidth: 70,
    },
    itemLogo: {
      padding: 10,
    },
    itemCinema: {
      padding: 10,
    },
  },
}));

export default useStyles;
