import { makeStyles } from "@material-ui/core/styles";
import * as themeColor from "./../../../../commons/theme";

const useStyles = makeStyles((theme) => ({
  showtime: {
    position: "relative",
  },
  container: {
    width: "70%",
    margin: "0 auto",
  },
  titleWrapper: {
    padding: "100px 0 50px 0",
    display: "flex",
    justifyContent: "center",
  },
  title: {
    marginRight: 20,
    cursor: "pointer",
    transition: "all 0.1s linear",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  contentCarousel: {
    "& img": {
      width: "100%",
    },
    "& .slick-next": {
      width: 50,
      height: 50,
      right: -50,
      zIndex: 99,
      "&::before": {
        display: "none",
      },
    },
    "&  .slick-prev": {
      width: 50,
      height: 50,
      left: -50,
      zIndex: 99,
      "&::before": {
        display: "none",
      },
    },
  },

  //item
  link: {
    textDecoration: "none",
    color: themeColor.blackColor,
  },
  itemWrapper: {
    cursor: "pointer",
  },
  images: {
    width: "100%",
    height: "100%",

    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  itemCarousel: {
    paddingTop: "143%",

    position: "relative",
    overflow: "hidden",
  },
  nameMovie: {
    marginTop: 5,
    height: 50,
    fontSize: 18,
    lineHeight: 1.4,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  duration: {
    color: themeColor.greyColor,
  },
  iconPlay: {
    display: "none",
    position: "absolute",
    top: "42%", // edit sau
    left: "50%",
    transform: "translate( -50%,-50%)",
    zIndex: 99,
    width: 48,
    height: 48,
    cursor: "pointer",
    transition: "all 0.1s linear",

    "&:hover": {
      transform: "translate( -50%,-50%) scale(1.1)",
    },
  },
  ageType: {
    backgroundColor: "#fb4226",
    borderRadius: 4,
    padding: "0 5px",
    position: "absolute",
    top: 12,
    left: 12,
    color: "#fff",
    minWidth: 33,
    textAlign: "center",
  },
  star: {
    fontSize: 10,
  },
  avgPoint: {
    fontSize: "16px",
    backgroundColor: "rgba(12,27,54,.8)",
    border: "1px solid #1f2e46",
    borderRadius: 4,
    padding: 2,
    position: "absolute",
    top: 12,
    right: 12,
    color: "#fff",
    width: 54,
    textAlign: "center",
    lineHeight: 1.1,
  },
  overLay: {
    display: "none",
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(12,27,54,.8)",
    opacity: 0.3,
  },

  wrapperMovie: {
    position: "relative",
    "&:hover span": {
      display: "block",
    },
  },

  [theme.breakpoints.down("960")]: {
    titleWrapper: {
      padding: "60px 0 20px 0",
    },
  },
  [theme.breakpoints.down("540")]: {
    nameMovie: {
      fontSize: 14,
      height: 40,
    },
    avgPoint: {
      fontSize: 10,
      width: 36,
    },
    star: {
      fontSize: 7,
    },
    ageType: {
      fontSize: 10,
    },
    titleWrapper: {
      paddingTop: 30,
    },
  },
}));

export default useStyles;
