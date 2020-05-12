import { Box, Typography, Button } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import cn from "classnames";
import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import useStyles from "./styles";
import {
  actChooseSeat,
  actGetSeatList,
  actBookTicket,
} from "./../../modules/home/actions";
import { sortName, formatCurrencyVND } from "./../../functions/helper";
import ClearIcon from "@material-ui/icons/Clear";

import Alert from "./../../components/Alert";
import AlertConfirm from "./../../components/AlertConfirm";
import { Redirect } from "react-router-dom";

function BookingPage(props) {
  const classes = useStyles();
  const {
    dispatch,
    arrNormalSeatList,
    arrVipSeatList,
    danhSachVe,
    infoMovieForTicket,
    isLogged,
    account,
  } = props;
  const { location } = props.history;

  const { match } = props;
  const { params } = match;
  useEffect(() => {
    dispatch(actGetSeatList(params));
  }, [dispatch, params]);

  const renderSeatNormal = () => {
    if (arrNormalSeatList && arrNormalSeatList.length > 0) {
      return arrNormalSeatList.map((item, index) => {
        const { daDat } = item;
        let isChoose = false;
        danhSachVe.forEach((seatDanhSachVe) => {
          if (seatDanhSachVe.maGhe === item.maGhe) {
            isChoose = true;
          }
        });
        return (
          <Fragment key={item.maGhe}>
            <Box
              component="button"
              onClick={() => {
                handleChooseSeat({
                  maGhe: item.maGhe,
                  giaVe: item.giaVe,
                  nameToShow: item.nameToShow,
                });
              }}
              className={cn(
                classes.seatItem,
                daDat && classes.booked,
                isChoose && classes.selecting
              )}
              disabled={daDat}
            >
              {daDat ? (
                <ClearIcon className={classes.iconBooked} />
              ) : (
                item.nameToShow
              )}
            </Box>
            {(index + 1) % 10 === 0 && <br />}
          </Fragment>
        );
      });
    }
  };

  const renderSeatVip = () => {
    if (arrVipSeatList && arrVipSeatList.length > 0) {
      return arrVipSeatList.map((item, index) => {
        const { daDat } = item;
        let isChoose = false;
        danhSachVe.forEach((seatDanhSachVe) => {
          if (seatDanhSachVe.maGhe === item.maGhe) {
            isChoose = true;
          }
        });
        return (
          <Fragment key={item.maGhe}>
            <Box
              onClick={() => {
                handleChooseSeat({
                  maGhe: item.maGhe,
                  giaVe: item.giaVe,
                  nameToShow: item.nameToShow,
                });
              }}
              component="button"
              className={cn(
                classes.seatItem,
                classes.vip,
                daDat && classes.booked,
                isChoose && classes.selecting
              )}
              disabled={daDat}
            >
              {daDat ? (
                <ClearIcon className={classes.iconBooked} />
              ) : (
                item.nameToShow
              )}
            </Box>
            {(index + 1) % 10 === 0 && <br />}
          </Fragment>
        );
      });
    }
  };

  const handleChooseSeat = (payload) => {
    dispatch(actChooseSeat(payload));
  };

  const renderInfoChooseSeat = () => {
    if (danhSachVe && danhSachVe.length > 0) {
      return sortName(danhSachVe, 1).map((seat) => {
        let nameToShow = "";

        //duyet mang thuong -> lay name To show
        if (arrNormalSeatList && arrNormalSeatList.length > 0) {
          arrNormalSeatList.forEach((itemShow) => {
            if (itemShow.maGhe === seat.maGhe) {
              nameToShow = itemShow.nameToShow;
            }
          });
        }

        //duyet mang vip -> lay name To show
        if (arrVipSeatList && arrVipSeatList.length > 0) {
          arrVipSeatList.forEach((itemShow) => {
            if (itemShow.maGhe === seat.maGhe) {
              nameToShow = itemShow.nameToShow;
            }
          });
        }

        return (
          <Box className={classes.seatItemInfo} key={seat.maGhe}>
            {nameToShow}
            <ClearIcon
              onClick={() => {
                handleChooseSeat({ maGhe: seat.maGhe });
              }}
              className={classes.iconCancel}
            />
          </Box>
        );
      });
    }
  };

  const handlePayment = () => {
    if (isLogged) {
      if (danhSachVe.length > 0) {
        const arrDanhSachVe = [];
        const arrNameToShow = [];
        danhSachVe.forEach((item) => {
          arrDanhSachVe.push({ maGhe: item.maGhe, giaVe: item.giaVe });
          arrNameToShow.push(item.nameToShow);
        });
        const payload = {
          data: {
            maLichChieu: parseInt(params.MaLichChieu),
            danhSachVe: arrDanhSachVe,
            taiKhoanNguoiDung: account.taiKhoan,
          },
          token: account.accessToken,
          arrNameToShow,
        };

        //lay string truyen vao alert
        let strNameToShow = "";
        arrNameToShow.forEach((item) => {
          strNameToShow += item + " ";
        });

        //function de pass vao AlertConfirm
        const callbackFunc = () => {
          dispatch(actBookTicket(payload));
        };
        AlertConfirm(
          { html: `Xác nhận đặt vé <br/> ${strNameToShow}` },
          callbackFunc
        );
      } else {
        Alert({ html: "Vui lòng chọn ghế", icon: "warning" });
      }
    } else {
      Alert({ icon: "warning", text: "Vui lòng đăng nhập" });
    }
  };

  const addEmptyImage = (e) => {
    e.target.src = "/images/defaultImage.png";
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      {!location.state && <Redirect to="/" />}

      <Box className={classes.booking}>
        <Box className={classes.container}>
          <Box className={classes.wrapperSeat}>
            <Box className={classes.wrapperScreen}>
              <Box textAlign="center" className={classes.screen}>
                Screen
              </Box>
              <Box>
                <ExitToAppIcon fontSize="large" color="primary" />
              </Box>
            </Box>
            <Box textAlign="center" className={classes.seatList}>
              <Box display="flex" flexWrap="wrap">
                {renderSeatNormal()}
              </Box>
              <Box display="flex" flexWrap="wrap">
                {renderSeatVip()}
              </Box>
            </Box>
            <Box display="flex" justifyContent="center">
              <Box className={cn(classes.setInfo, classes.nor)}>
                <Box className={classes.text}>Normal</Box>
              </Box>
              <Box className={cn(classes.setInfo, classes.vip)}>
                <Box className={classes.text}>VIP</Box>
              </Box>
              <Box className={cn(classes.setInfo, classes.selecting)}>
                <Box className={classes.text}>Selecting</Box>
              </Box>
              <Box
                position="relative"
                className={cn(classes.setInfo, classes.booked)}
                textAlign="center"
              >
                <ClearIcon className={classes.iconBooked} />
                <Box className={classes.text}>Booked</Box>
              </Box>
            </Box>
          </Box>
          <Box className={classes.wrapperInfo}>
            <Box className={classes.infoMovie}>
              <Box className={classes.wrapperImg}>
                <Box className={classes.contentImg}>
                  <img
                    onError={addEmptyImage}
                    src={infoMovieForTicket.hinhAnh}
                    alt={infoMovieForTicket.tenPhim}
                  />
                </Box>
              </Box>
              <Box className={classes.textMovie}>
                <Typography className={classes.nameMovie}>
                  {infoMovieForTicket.tenPhim}
                </Typography>
                <Typography variant="subtitle1">
                  Date:{" "}
                  <span className={classes.highLight}>
                    {infoMovieForTicket.ngayChieu}
                  </span>
                </Typography>
                <Typography variant="subtitle1">
                  Time:{" "}
                  <span className={classes.highLight}>
                    {location.state && location.state.hourToShow}
                  </span>
                </Typography>
              </Box>
            </Box>
            <Box className={classes.infoCinema}>
              <Typography className={classes.nameMovie}>
                {infoMovieForTicket.tenCumRap}
              </Typography>
              <Typography className={classes.addressMovie} variant="subtitle1">
                Address: {infoMovieForTicket.diaChi}
              </Typography>
              <Typography variant="subtitle1">
                Screen:{" "}
                <span className={classes.highLight}>
                  {infoMovieForTicket.tenRap}
                </span>
              </Typography>
            </Box>
            <Box className={cn(classes.infoCinema, classes.infoTicket)}>
              <Typography className={classes.nameMovie}>
                Số ghế đang chọn: {danhSachVe.length}
              </Typography>
              <Box className={classes.wrapperInfoSeat}>
                {renderInfoChooseSeat()}
              </Box>
              <Box className={classes.total}>
                {"Total: "}
                {formatCurrencyVND(
                  danhSachVe.reduce((sum, ticket) => {
                    return sum + ticket.giaVe;
                  }, 0)
                )}
              </Box>
            </Box>
            <Button
              onClick={handlePayment}
              className={classes.button}
              fullWidth
              color="primary"
              variant="contained"
            >
              Thanh toán
            </Button>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}
const mapStateToProps = (state) => ({
  arrVipSeatList: state.home.arrVipSeatList,
  arrNormalSeatList: state.home.arrNormalSeatList,
  infoMovieForTicket: state.home.infoMovieForTicket,
  danhSachVe: state.home.danhSachVe,
  isLogged: state.auth.isLogged,
  account: state.auth.account,
});

export default connect(mapStateToProps)(BookingPage);
