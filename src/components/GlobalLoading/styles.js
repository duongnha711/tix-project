import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  globalLoading: {
    position: "fixed",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 999,
    // background: "rgba(0,0,0,0.7)",
    background: "white",
    // background: "#3772dd59",
  },
  icon: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

export default useStyles;
