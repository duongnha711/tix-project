import { Avatar, Box, List, ListItem } from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import {
  actCloseGlobalLoading,
  actOpenGlobalLoading,
} from "../../commons/actions";
import { actLogOut } from "../../modules/auth/actions";
import useStyles from "./styles";
import { Link, useHistory } from "react-router-dom";

function UserInfo(props) {
  let history = useHistory();

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const { dispatch, account } = props;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleLogOut = () => {
    history.push("/");
    setAnchorEl(null);
    dispatch(actLogOut());
    dispatch(actOpenGlobalLoading());
    setTimeout(() => {
      dispatch(actCloseGlobalLoading());
    }, 1000);
  };

  return (
    <Fragment>
      <Box
        display="flex"
        alignItems="center"
        className={classes.username}
        onClick={handleClick}
        marginRight={1}
      >
        <Avatar className={classes.ava}>{account.hoTen.substring(0, 1)}</Avatar>

        <Box> {account.hoTen}</Box>
      </Box>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <List>
          <Link to="/user-info" className={classes.link}>
            <ListItem button>Thông tin tài khoản</ListItem>
          </Link>
          <ListItem onClick={handleLogOut} button>
            Log out
          </ListItem>
        </List>
      </Popover>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  account: state.auth.account,
});

export default connect(mapStateToProps)(UserInfo);
