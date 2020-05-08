import { makeStyles } from "@material-ui/core/styles";
// import * as themeColor from "./../../../../commons/theme";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "70%",
    margin: "0 auto",
    paddingBottom: 40,
    "& a": {
      textDecoration: "none",
      color: "inherit",
    },
  },
  title: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 30,
    "& h5:nth-child(2)": {
      margin: "0 30px",
    },
    "& h5": {
      cursor: "pointer",
      transition: "all 0.1s linear",
    },
    "& h5:hover": {
      transform: "scale(1.1)",
    },
  },
  mainNewsItem: {
    marginBottom: 30,
  },
  updateNewsItem: {
    marginBottom: 30,
  },
  itemUpdate: {
    display: "flex",
    marginBottom: 10,
    cursor: "pointer",
    alignItems: "center",
  },

  titleUpdate: {
    marginLeft: 5,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  updateNewsItemEnd: {
    marginBottom: 30,
  },
  [theme.breakpoints.down("468")]: {
    title: {
      "& h5": {
        fontSize: 16,
        fontWeight: "bold",
      },
      "& h5:nth-child(2)": {
        margin: "0 14px",
      },
    },
  },
}));

export default useStyles;
