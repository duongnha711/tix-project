import { makeStyles } from "@material-ui/core/styles";
import {
  backgroundInfoCinema,
  textDefaultColor,
  primaryColor,
} from "./../../../commons/theme";

const useStyles = makeStyles((theme) => ({
  wrapperInfo: {
    minHeight: 350,
    display: "flex",
    background: backgroundInfoCinema,
    color: textDefaultColor,
  },
  listLogo: {
    padding: 20,
    maxWidth: 90,
    borderRight: "1px solid #2d2c2c",
  },
  logo: {
    cursor: "pointer",
    width: 50,
    height: 50,
    marginBottom: 10,
    borderRadius: "50%",
    overflow: "hidden",
    opacity: 0.3,
    "& img": {
      width: "100%",
      display: "block",
    },
  },
  activeLogo: {
    opacity: 1,
  },
  listCinema: {
    minWidth: 250,
    maxWidth: 250,

    padding: 20,
    borderRight: "1px solid #2d2c2c",
  },
  infoDateTime: {
    padding: 20,
  },
  dateCinema: {
    display: "flex",
    flexWrap: "wrap",
  },

  contentHour: {
    display: "flex",
  },
  wrapperImg: {
    width: 80, // kích thước width mong muốn
    minWidth: 100, // kích thước width mong muốn

    borderRadius: 4,
    overflow: "hidden",
    marginRight: 10,
    position: "relative",
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

  itemBranch: {
    display: "flex",
    alignItems: "center",
    height: 50,
    cursor: "pointer",
    marginBottom: 10,
    opacity: 0.3,
  },
  activeBranch: {
    opacity: 1,
  },

  itemDate: {
    cursor: "pointer",
    padding: 5,
    border: "1px solid",
    borderRadius: 4,
    marginRight: 10,
    marginBottom: 10,
  },
  activeDate: {
    color: primaryColor,
  },
  itemHour: {
    cursor: "pointer",
    padding: 5,
    border: "1px solid",
    borderRadius: 4,
    marginRight: 10,
    marginTop: 10,
    color: primaryColor,
  },
  divider: {
    marginBottom: 10,
  },
  [theme.breakpoints.down("820")]: {
    wrapperInfo: {
      display: "block",
      minHeight: 510,
    },
    listCinema: {
      borderRight: "none",
      maxWidth: "unset",
      minWidth: "unset",
      flexGrow: 1,
    },
  },
}));

export default useStyles;
