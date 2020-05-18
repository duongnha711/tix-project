import { makeStyles } from "@material-ui/core/styles";
// import { primaryColor } from "./../../../../commons/theme";

const useStyles = makeStyles((theme) => ({
  wrapperTable: {
  },
  table: {
    "& .MuiTableCell-root": {
      padding: 4,
    },
  },
  wrapperButton: {
    display: "flex",
    justifyContent: "center",
    minWidth: 200,
  },
  button: {
    marginRight: 10,
  },
}));

export default useStyles;
