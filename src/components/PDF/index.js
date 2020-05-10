import { Box } from "@material-ui/core";
import React, { useEffect } from "react";
// import useStyles from "./styles";
import { connect } from "react-redux";
import {
  actCloseGlobalLoading,
  actOpenGlobalLoading,
} from "../../commons/actions";

function PDF(props) {
  // const classes = useStyles();
  const { dispatch } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(actOpenGlobalLoading());
    setTimeout(() => {
      dispatch(actCloseGlobalLoading());
    }, 700);
  }, [dispatch]);
  return (
    <Box>
      <embed
        src="/assets/Front-end-DuongHoangNha-2020.pdf"
        type="application/pdf"
        width="100%"
        height="1200"
      />
    </Box>
  );
}
export default connect()(PDF);
