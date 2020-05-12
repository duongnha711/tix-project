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
import {
  actOpenGlobalLoading,
  actCloseGlobalLoading,
} from "../../commons/actions";
// import { sendRequest } from "./../../functions/effect";

function UserManagement(props) {
  const classes = useStyles();

  const [suitShow, setSuitShow] = useState("history");

  const {
    dispatch,
    account,
    userBookingInfo,
    isLogged,
    userInfo,
    token,
  } = props;

  useEffect(() => {
    dispatch(actGetInfoBookingUser({ taiKhoan: account.taiKhoan }));
  }, [account.taiKhoan, dispatch]);

  const handleSuitShow = (value) => {
    setSuitShow(value);
  };

  // //test
  // useEffect(() => {
  //   const getData = async () => {
  //     //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //     const LayThongTinLichChieuPhim = await sendRequest({
  //       url:
  //         "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=1359",
  //     });
  //     console.log(
  //       "getData -> LayThongTinLichChieuPhim",
  //       LayThongTinLichChieuPhim.data
  //     );

  //     //~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //   };
  //   getData();
  // }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(actOpenGlobalLoading());
    setTimeout(() => {
      dispatch(actCloseGlobalLoading());
    }, 700);
  }, [dispatch]);

  return (
    <Fragment>
      {!isLogged && <Redirect to="/" />}
      <Box className={classes.wrapperUser}>
        <Box className={classes.container}>
          <Paper className={classes.controlUser}>
            <List>
              <ListItem>
                <Typography className={classes.title} variant="h5">
                  {account.hoTen}
                </Typography>
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
                  <Typography variant="h5" className={classes.homePage}>
                    Home page
                  </Typography>
                </ListItem>
              </Link>
            </List>
          </Paper>
          <Paper className={classes.infoUser}>
            {/* // goi ham render if else */}
            {suitShow === "info" && <UserInformation />}
            {suitShow === "change" && (
              <UserChangePass userInfo={userInfo} token={token} />
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
  userInfo: state.auth.userInfo,
  token: state.auth.account.accessToken,
});

export default connect(mapStateToProps)(UserManagement);
