import React from "react";
import useStyles from "./styles";

import { connect } from "react-redux";

function GlobalLoading(props) {
  const classes = useStyles();
  const { isShowGlobalLoading } = props;
  return isShowGlobalLoading ? (
    <div className={classes.globalLoading}>
      <img
        className={classes.icon}
        src="/images/dogLoading.gif"
        alt="Global loading"
      />
    </div>
  ) : null;
}

const mapStateToProps = (state) => {
  return {
    isShowGlobalLoading: state.ui.isShowGlobalLoading,
  };
};

export default connect(mapStateToProps)(GlobalLoading);
