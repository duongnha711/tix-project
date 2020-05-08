import { makeStyles } from "@material-ui/core/styles";
// import * as themeColor from "./../../../../commons/theme";

const useStyles = makeStyles((theme) => ({
  newsTitle: {
    cursor: "pointer",
    padding: "80px 0 40px 0",
  },
  active: {
    color: "red",
  },
}));

export default useStyles;
