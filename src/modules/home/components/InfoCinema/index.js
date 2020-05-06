import { Box, Divider, Paper, Typography } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import React, { Fragment, useState } from "react";
import useStyles from "./styles";
import cn from "classnames";

export default function InfoCinema(props) {
  const classes = useStyles();

  //state cho time va date
  const [dateState, SetDateState] = useState("");

  const {
    cinemaList,
    cinemaBrach,
    showTimeDetail,
    maHeThongRap,
    maCumRap,
  } = props;

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
              {/* //date */}
              <Box display="flex">{renderDate(movie.lstLichChieuTheoPhim)}</Box>
              <Typography className={classes.titleMovie} variant="h5">
                {movie.tenPhim}
              </Typography>
              <Typography className={classes.textMovie}>
                {`Movie name: ${movie.tenPhim} - API don't have description ... The best way to learn code is to write code!`}
              </Typography>
              <Typography color="primary">
                <em>
                  <b>View More</b>
                </em>
              </Typography>

              <Box className={classes.time}>
                <Box className={classes.timeView}>
                  <AccessTimeIcon fontSize="small" />
                  View Time
                </Box>

                <Box key={index} className={classes.timeDetail}>
                  17h
                </Box>
              </Box>
            </Box>
          </Box>
        );
      });
    } else {
      return <Box className={classes.itemMovie}>Không có suất chiếu</Box>;
    }
  };

  const renderDate = (arrDateTime) => {
    if (arrDateTime && arrDateTime.length > 0) {
      return arrDateTime.map((item, index) => {
        return (
          <Box
            onClick={() => {
              handleClickDateOfMovie(item.ngayChieuGioChieu.substring(0, 10));
            }}
            key={index}
            className={cn(
              classes.timeDetail,
              dateState === item.ngayChieuGioChieu.substring(0, 10) &&
                classes.activeDate
            )}
          >
            {item.ngayChieuGioChieu.substring(0, 10)}
          </Box>
        );
      });
    }
  };

  const handleClickLogo = (maHeThongRap) => {
    props.handleGetCinemaBrach(maHeThongRap);
  };

  const handleClickCinema = (maCumRap) => {
    props.handleGetShowTimeDetail(maCumRap);
  };

  const handleClickDateOfMovie = (date) => {
    SetDateState(date)
    console.log("handleClickDateOfMovie -> date", date);
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
          <Box className={classes.listMovie}>{renderMovie()}</Box>
        </Box>
      </Paper>
    </Box>
  );
}
