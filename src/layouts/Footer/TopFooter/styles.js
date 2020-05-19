import { makeStyles } from "@material-ui/core/styles";
import { themeGradientPrimary } from "./../../../commons/theme";

const useStyles = makeStyles((theme) => ({
  topFooter: {
    textAlign: "center",
    padding: "15px 0",
  },
  logo: {
    fontSize: 25,
    cursor: "pointer",
    "& a": {
      textDecoration: "none",
      background: themeGradientPrimary,

      WebkitTextFillColor: "transparent",
      WebkitBackgroundClip: "text",
    },
  },
  linkWrap: {
    margin: "10px",
  },
  wrapperIcon: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    position: "relative",
    background: "white",
    cursor: "pointer",
  },

  icon: {
    position: "absolute",
    top: "50%",
    left: " 50%",
    transform: "translate(-50%,-50%)",
    fontSize: 36,
  },
}));

export default useStyles;
