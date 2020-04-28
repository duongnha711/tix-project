import { makeStyles } from "@material-ui/core/styles";
// import { primaryColor } from "./../../../../commons/theme";

const useStyles = makeStyles((theme) => ({
  container: {
    width: 940,
    margin: "0 auto",
    position: "absolute",
    bottom: "-35px",
    left: "50%",
    zIndex: 99,
    transform: "translateX(-50%)",
  },
  itemFilter: {
    cursor: "pointer",
    padding: "20px 7px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    padding: "9.5px 10px",
    marginLeft: 10,
  },

  nameMovie: {
    width: 260,
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  nameCinema: {
    width: 181,
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  dayMovie: {
    width: 110,
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  timeMovie: {
    width: 100,
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
}));

export default useStyles;
