import { makeStyles } from "@material-ui/core/styles";
import * as themeColor from "./../../../../commons/theme";

const useStyles = makeStyles((theme) => ({
  mobileApp: {
    backgroundImage: "url('./images/backApp.jpg')",
    // height: 500,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "120px 0 80px 0",
  },
  container: {
    width: "70%",
    margin: "0 auto",
  },
  contentApp: {
    color: themeColor.whiteColor,
  },
  title: {
    marginBottom: 40,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  text: {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  button: {
    margin: "30px 0 15px 0",
  },
  mobileContent: {
    display: "flex",
    justifyContent: "center",
  },
  [theme.breakpoints.down("960")]: {
    contentApp: {
      textAlign: "center",
      marginBottom: 30,
    },
  },
}));

export default useStyles;
