import { makeStyles } from "@material-ui/core/styles";
// import { themeGradientSecond, themeGradientPrimary } from "../../commons/theme";

const useStyles = makeStyles((theme) => ({
  pageItems: {
    display: "inline-block",
    cursor: "pointer",
    margin: "0 10px",
    width: 25,
    height: 25,
    lineHeight: "25px",
    background: "#bfbfbf",
    textAlign: "center",
    borderRadius: 4,
  },
  active: {
    background: "#3085d6",
    color: "white",
  },
}));

export default useStyles;
