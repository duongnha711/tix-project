import Dialog from "@material-ui/core/Dialog";
import React from "react";
import { connect } from "react-redux";
import useStyles from "./styles";
import { actCloseTrailer } from "../modules/home/actions";
import ClearIcon from "@material-ui/icons/Clear";

function AlertDialog(props) {
  const classes = useStyles();

  const { dispatch, openTrailer } = props;

  const handleClose = () => {
    dispatch(actCloseTrailer());
  };

  return (
    <Dialog
      className={classes.video}
      open={openTrailer.open}
      onClose={handleClose}
    >
      <iframe
        width="560"
        height="315"
        src={`${openTrailer.trailer}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={openTrailer.trailer}
      ></iframe>

      <ClearIcon onClick={handleClose} className={classes.iconCancel} />
    </Dialog>
  );
}

const mapStateToProps = (state) => ({
  openTrailer: state.home.openTrailer,
});

export default connect(mapStateToProps)(AlertDialog);
