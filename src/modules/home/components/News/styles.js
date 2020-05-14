import { makeStyles } from "@material-ui/core/styles";
import { newsFilterBackground, primaryColor } from "../../../../commons/theme";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "70%",
    margin: "0 auto",
    // padding: "80px 0 40px 0",
    paddingBottom: 40,
    "& a": {
      textDecoration: "none",
      color: "inherit",
      width: "100%",
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
  wrapperImg: {
    width: 50,
    height: 50,
    borderRadius: 4,
    overflow: "hidden",
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
    background: newsFilterBackground,
    height: "100%",
    borderRadius: 4,
    padding: 8,

    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
  },
  nameHero: {
    color: primaryColor,
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
