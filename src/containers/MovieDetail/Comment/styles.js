import { makeStyles } from "@material-ui/core/styles";
import {
  commentColor1,
  blackColor,
  commentColor2,
} from "./../../../commons/theme";

const useStyles = makeStyles((theme) => ({
  containerComment: {
    height: 350,
    overflowY: "auto",
    padding: "0 10px",

    //chrome
    "&::-webkit-scrollbar": {
      width: 3,
    },
    "&::-webkit-scrollbar-track": {
      margin: 10,
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#33acf3",
    },

    //firefox
    scrollbarColor: "#96B4D5 #0f2434d1 ",
    scrollbarWidth: "thin",
  },
  mainComment: {
    cursor: "pointer",
    background: commentColor1,
    color: blackColor,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    borderRadius: 4,
    padding: 12,
    marginBottom: 30,
    transition: "all 0.1s linear",
    "&:hover": {
      background: commentColor2,
    },
  },
  wrapperItemComment: {
    margin: "20px 0",
  },
  itemComment: {
    width: "60%",
    margin: "20px 0",
  },
  wrapperName: {
    display: "flex",
    justifyContent: "space-between",
  },
  boxComment: {
    background: commentColor1,
    padding: 15,
    borderRadius: 4,

    color: blackColor,
  },
  rightComment: {
    marginLeft: "auto",

    "& div:nth-child(2)": {
      background: commentColor2,
    },
  },

  [theme.breakpoints.down("600")]: {
    itemComment: {
      width: "100%",
    },
  },
}));

export default useStyles;
