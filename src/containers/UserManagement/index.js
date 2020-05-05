import {
  Box,
  Divider,
  List,
  ListItem,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useEffect, Fragment, useState } from "react";
import { connect } from "react-redux";
import { actGetInfoBookingUser } from "../../modules/auth/actions";
import HistoryBooking from "./HistoryBooking";
import useStyles from "./styles";
import { Redirect, Link } from "react-router-dom";
import UserInformation from "./UserInformation";
import UserChangePass from "./UserChangePass";
import cn from "classnames";

function UserManagement(props) {
  const classes = useStyles();

  const [suitShow, setSuitShow] = useState("change");

  const { dispatch, account, userBookingInfo, isLogged, currentPass } = props;

  useEffect(() => {
    dispatch(actGetInfoBookingUser({ taiKhoan: account.taiKhoan }));
  }, [account.taiKhoan, dispatch]);

  const handleSuitShow = (value) => {
    setSuitShow(value);
  };

  return (
    <Fragment>
      {!isLogged && <Redirect to="/" />}
      <Box className={classes.wrapperUser}>
        <Box className={classes.container}>
          <Paper className={classes.controlUser}>
            <List>
              <ListItem>
                <Typography variant="h5">{account.hoTen}</Typography>
              </ListItem>
              <Divider variant="middle" />

              <ListItem
                onClick={() => {
                  handleSuitShow("info");
                }}
                className={cn(
                  classes.itemControl,
                  suitShow === "info" && classes.active
                )}
              >
                <Typography>Thông tin tài khoản</Typography>
              </ListItem>
              <ListItem
                onClick={() => {
                  handleSuitShow("change");
                }}
                className={cn(
                  classes.itemControl,
                  suitShow === "change" && classes.active
                )}
              >
                <Typography>Đổi mật khẩu</Typography>
              </ListItem>
              <ListItem
                onClick={() => {
                  handleSuitShow("history");
                }}
                className={cn(
                  classes.itemControl,
                  suitShow === "history" && classes.active
                )}
              >
                <Typography>Lịch sử đặt vé</Typography>
              </ListItem>

              <Divider variant="middle" />
              <Link className={classes.link} to="/">
                <ListItem button>
                  <Typography>Home page</Typography>
                </ListItem>
              </Link>
            </List>
          </Paper>
          <Paper className={classes.infoUser}>
            {/* // goi ham render if else */}
            {suitShow === "info" && <UserInformation />}
            {suitShow === "change" && (
              <UserChangePass currentPass={currentPass} />
            )}
            {suitShow === "history" && (
              <HistoryBooking userBookingInfo={userBookingInfo} />
            )}
          </Paper>
        </Box>
      </Box>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  account: state.auth.account,
  userBookingInfo: state.auth.userBookingInfo,
  isLogged: state.auth.isLogged,
  currentPass: state.auth.currentPass,
});

export default connect(mapStateToProps)(UserManagement);
