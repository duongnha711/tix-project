import { makeStyles } from "@material-ui/core/styles";
// import { primaryColor } from "./../../../../commons/theme";

const useStyles = makeStyles((theme) => ({
  container: {
    width: 940,
    margin: "0 auto",
    padding: "15px 10px",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    position: "absolute",
    top: "-35px",
    left: "50%",
    zIndex: 99,
    transform: "translateX(-50%)",
  },
  name: {
    width: 282,
    marginRight: 10,
  },
  cinema: {
    width: 200,
  },
  date: {
    width: 130,
    marginRight: 10,
  },
  time: {
    width: 110,
  },

  loading: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 990,
  },
  
  [theme.breakpoints.down("980")]: {
    container: {
      position: "unset",
      transform: "unset",
      width: "70%",
      display: "block",
      textAlign: "center",
      "& .MuiFormControl-root": {
        display: "block",
        width: "48%",
      },
    },
    wrapperItem: {
      marginBottom: 15,
    },
    name: {
      width: "100%",
      marginRight: 0,
    },
    cinema: {
      width: "100%",
    },
    date: {
      width: "100%",
      marginRight: 0,
    },
    time: {
      width: "100%",
    },
  },
  [theme.breakpoints.down("600")]: {
    wrapperItem: {
      display: "block",
    },
    container: {
      "& .MuiFormControl-root": {
        width: "100%",
      },
    },
    name: {
      marginBottom: 15,
    },
    date: {
      marginBottom: 15,
    },
  },
}));

export default useStyles;
