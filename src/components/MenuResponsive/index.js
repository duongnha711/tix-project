import {
  Avatar,
  Box,
  Button,
  Drawer,
  Hidden,
  List,
  ListItem,
} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import {
  actOpenLogin,
  actOpenRegister,
  actOpenGlobalLoading,
  actCloseGlobalLoading,
} from "../../commons/actions";
import useStyles from "./styles";
import { actLogOut } from "../../modules/auth/actions";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function MenuResponsive(props) {
  const { isShowMenuResponsive } = props;
  const classes = useStyles();

  const { dispatch, isLogged, account } = props;

  const handleCloseMenuResponsive = () => {
    props.handleCloseMenuResponsive();
  };

  const handleOnClickOpenLogin = () => {
    dispatch(actOpenLogin());
    props.handleCloseMenuResponsive();
  };
  const handleOnClickOpenRegister = () => {
    dispatch(actOpenRegister());
    props.handleCloseMenuResponsive();
  };

  const handleLogOut = () => {
    props.handleCloseMenuResponsive();
    dispatch(actLogOut());
    dispatch(actOpenGlobalLoading());
    setTimeout(() => {
      dispatch(actCloseGlobalLoading());
    }, 1000);
  };

  return (
    // {/* Icon Menu responsive <730 -> show */}
    <Hidden mdUp>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={isShowMenuResponsive}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List className={classes.link}>
          <ListItem className={classes.wrapperAccount}>
            {isLogged && (
              <Box className={classes.account}>
                <Avatar className={classes.ava}>
                  {account.hoTen.substring(0, 1)}
                </Avatar>
                {account.hoTen}
              </Box>
            )}

            <ChevronRightIcon
              onClick={handleCloseMenuResponsive}
              className={classes.iconClose}
            />
          </ListItem>

          {isLogged && (
            <Link to="/user-info">
              <ListItem button>Thông tin tài khoản</ListItem>
            </Link>
          )}

          <HashLink to="/#showTime">
            <ListItem button>Lịch chiếu</ListItem>
          </HashLink>
          <HashLink to="/#infoCinema">
            <ListItem button>Cụm rạp</ListItem>
          </HashLink>
          <HashLink to="/#news">
            <ListItem button>Tin tức</ListItem>
          </HashLink>
          <HashLink to="/#app">
            <ListItem button>Ứng dụng</ListItem>
          </HashLink>

          {isLogged ? (
            <ListItem>
              <Button
                onClick={handleLogOut}
                className={classes.button}
                size="medium"
                color="primary"
                variant="contained"
                fullWidth
              >
                Log out
              </Button>
            </ListItem>
          ) : (
            <Fragment>
              <ListItem>
                <Button
                  onClick={handleOnClickOpenLogin}
                  className={classes.button}
                  size="medium"
                  color="primary"
                  variant="contained"
                  fullWidth
                >
                  Log in
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  onClick={handleOnClickOpenRegister}
                  color="primary"
                  variant="outlined"
                  size="medium"
                  fullWidth
                >
                  Register
                </Button>
              </ListItem>
            </Fragment>
          )}
        </List>
      </Drawer>
    </Hidden>
  );
}

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  account: state.auth.account,
});

export default connect(mapStateToProps)(MenuResponsive);
