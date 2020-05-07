import { makeStyles } from "@material-ui/core/styles";
// import * as themeColor from "./../../../commons/theme";

const useStyles = makeStyles((theme) => ({
  logo: {
    cursor: "pointer",
    width: 50,
    height: 50,
    "& img": {
      width: "100%",
      display: "block",
    },
  },
  activeLogo: {
    background: "blue",
  },
  itemBranch: {
    cursor: "pointer",
  },
  activeBranch: {
    background: "blue",
  },

  itemDate: {
    cursor: "pointer",
  },
  activeDate: {
    background: "blue",
  },
  itemHour: {
    cursor: "pointer",
  },
}));

export default useStyles;
