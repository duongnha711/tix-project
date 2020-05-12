import { Box, Divider, Paper, Typography } from "@material-ui/core";
import cn from "classnames";
import React, { Fragment, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  changeFormateDate,
  convertFrom24To12Format,
  removeDuplicateInArr,
  toSlug,
} from "../../../../functions/helper";
import useStyles from "./styles";
import { connect } from "react-redux";
import Alert from "../../../../components/Alert";

function InfoCinema(props) {
  const classes = useStyles();
  const {
    cinemaList,
    cinemaBrach,
    showTimeDetail,
    maHeThongRap,
    maCumRap,
    isLogged,
  } = props;

  const [choseDate, SetChoseDate] = useState("");

  const history = useHistory();

  const renderCinemaLogo = () => {
    if (Array.isArray(cinemaList) && cinemaList.length > 0) {
      return cinemaList.map((cinema) => (
        <Fragment key={cinema.maHeThongRap}>
          <Box
            onClick={() => {
              handleClickLogo(cinema.maHeThongRap);
            }}
            className={cn(
              classes.itemLogo,
              maHeThongRap === cinema.maHeThongRap && classes.activeLogo
            )}
          >
            <img src={cinema.logo} alt={cinema.maHeThongRap} />
          </Box>
          <Divider variant="middle" />
        </Fragment>
      ));
    }
  };

  const renderCinemaBranch = () => {
    if (Array.isArray(cinemaBrach) && cinemaBrach.length > 0) {
      return cinemaBrach.map((cinema, index) => (
        <Fragment key={index}>
          <Box
            onClick={() => {
              handleClickCinema(cinema.maCumRap);
            }}
            className={cn(
              classes.itemCinema,
              maCumRap === cinema.maCumRap && classes.activeCinema
            )}
          >
            <Box className={classes.imgCinema}>
              <img
                src="/images/cinema.png"
                alt="cinema"
                width="50px"
                height="50px"
              />
            </Box>
            <Box className={classes.contentCinema}>
              <Typography>{cinema.tenCumRap}</Typography>
              <Typography variant="subtitle1">{cinema.diaChi}</Typography>
              {/* <Typography variant="subtitle1">
                <span>[Chi tiết]</span>
              </Typography> */}
            </Box>
          </Box>
          <Divider variant="middle" />
        </Fragment>
      ));
    } else {
      return <Box className={classes.itemCinema}>Không có suất chiếu</Box>;
    }
  };

  const renderMovie = () => {
    if (Array.isArray(showTimeDetail) && showTimeDetail.length > 0) {
      return showTimeDetail.map((movie, index) => {
        return (
          <Box key={index} className={classes.itemMovie}>
            <Box>
              <Paper className={classes.wrapperImg}>
                <Box className={classes.contentImg}>
                  <img
                    onError={addEmptyImage}
                    src={movie.hinhAnh}
                    alt={movie.tenPhim}
                  />
                </Box>
              </Paper>
            </Box>
            <Box className={classes.contentMovie}>
              <Typography className={classes.titleMovie} variant="h5">
                {movie.tenPhim}
              </Typography>
              <Typography className={classes.textMovie}>
                {`Movie name: ${movie.tenPhim} - API don't have description ... The best way to learn code is to write code!`}
              </Typography>
              <Link
                to={{
                  pathname: `/detail/${movie.maPhim}/${toSlug(movie.tenPhim)}`,
                  state: { kind: "showTime" },
                }}
              >
                <Typography className={classes.viewMore} color="secondary">
                  <em>
                    <b>View More</b>
                  </em>
                </Typography>
              </Link>
              <Box className={classes.time}>
                <Box key={index} display="flex" flexWrap="wrap">
                  {renderHour(movie.maPhim)}
                </Box>
              </Box>
            </Box>
          </Box>
        );
      });
    } else {
      return (
        <Box style={{ color: "grey" }} className={classes.itemMovie}>
          Không có suất chiếu
        </Box>
      );
    }
  };

  //set State thang dau tien cho date
  useEffect(() => {
    if (showTimeDetail && showTimeDetail.length > 0) {
      SetChoseDate(
        showTimeDetail[0].lstLichChieuTheoPhim[0].ngayChieuGioChieu.substring(
          0,
          10
        )
      );
    }
  }, [showTimeDetail]);

  const renderDate = () => {
    let arrDate = [];
    if (showTimeDetail && showTimeDetail.length > 0) {
      showTimeDetail.forEach((item) => {
        item.lstLichChieuTheoPhim.forEach((subItem) => {
          arrDate.push(subItem.ngayChieuGioChieu.substring(0, 10));
        });
      });
    }
    arrDate = removeDuplicateInArr(arrDate);
    return arrDate.map((item, index) => {
      return (
        <Box
          onClick={() => {
            handleClickDate(item);
          }}
          className={cn(
            classes.dateMovie,
            item === choseDate && classes.activeDate
          )}
          marginRight={1}
          key={index}
        >
          {changeFormateDate(item)}
        </Box>
      );
    });
  };

  const renderHour = (maPhim) => {
    let arrHour = [];
    showTimeDetail.forEach((item) => {
      if (item.maPhim === maPhim) {
        item.lstLichChieuTheoPhim.forEach((subItem) => {
          if (subItem.ngayChieuGioChieu.substring(0, 10) === choseDate) {
            arrHour.push({
              ngayChieuGioChieu: subItem.ngayChieuGioChieu,
              maLichChieu: subItem.maLichChieu,
            });
          }
        });
      }
    });
    if (arrHour && arrHour.length > 0) {
      return arrHour.map((item) => {
        return (
          <Box
            onClick={() => {
              handleClickHour(
                item.maLichChieu,
                convertFrom24To12Format(
                  item.ngayChieuGioChieu.substring(
                    11,
                    item.ngayChieuGioChieu.length
                  )
                )
              );
            }}
            key={item.maLichChieu}
            className={classes.timeDetail}
          >
            {convertFrom24To12Format(
              item.ngayChieuGioChieu.substring(
                11,
                item.ngayChieuGioChieu.length
              )
            )}
          </Box>
        );
      });
    } else {
      return <Box style={{ color: "grey" }}>Không có suất chiếu</Box>;
    }
  };

  const handleClickLogo = (maHeThongRap) => {
    props.handleGetCinemaBrach(maHeThongRap);
  };

  const handleClickCinema = (maCumRap) => {
    props.handleGetShowTimeDetail(maCumRap);
  };

  const handleClickDate = (date) => {
    SetChoseDate(date);
  };

  const handleClickHour = (maLichChieu, hourToShow) => {
    if (isLogged) {
      history.push(`/booking-ticket/${maLichChieu}`, { hourToShow });
    } else {
      Alert({ icon: "warning", text: "Vui lòng đăng nhập" });
    }
  };

  const addEmptyImage = (e) => {
    e.target.src = "/images/defaultImage.png";
  };

  return (
    <Box id="infoCinema" className={classes.infoCinema}>
      <Paper elevation={1} className={classes.container}>
        <Box className={classes.cinemaWrapper}>
          <Box display="flex">
            <Box className={classes.listLogo}>{renderCinemaLogo()}</Box>
            <Box className={classes.listCinema}>{renderCinemaBranch()}</Box>
          </Box>

          <Box className={classes.listMovie}>
            <Box className={classes.listDate} flexWrap="wrap" display="flex">
              {renderDate()}
            </Box>
            {renderMovie()}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

export default connect(mapStateToProps)(InfoCinema);
