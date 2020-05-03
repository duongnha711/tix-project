import { Box, Divider, Paper, Typography } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import React, { Fragment } from "react";
import useStyles from "./styles";

export default function InfoCinema(props) {
  const { cinemaList, cinemaBrach, showTimeDetail } = props;

  const classes = useStyles();

  const renderCinemaLogo = () => {
    if (Array.isArray(cinemaList) && cinemaList.length > 0) {
      return cinemaList.map((cinema) => (
        <Fragment key={cinema.maHeThongRap}>
          <Box
            onClick={() => {
              handleClickLogo(cinema.maHeThongRap);
            }}
            className={classes.itemLogo}
          >
            <img src={cinema.logo} alt={cinema.maHeThongRap} />
          </Box>
          <Divider variant="middle" />
        </Fragment>
      ));
    }
  };

  const renderCinemaBrach = () => {
    if (Array.isArray(cinemaBrach) && cinemaBrach.length > 0) {
      return cinemaBrach.map((cinema, index) => (
        <Fragment key={index}>
          <Box
            onClick={() => {
              handleClickCinema(cinema.maCumRap);
            }}
            className={classes.itemCinema}
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
      return (
        <Box className={classes.itemCinema}>
          Gọi API để vừa vào lấy đầu tiên{" "}
        </Box>
      );
    }
  };

  const renderMovie = () => {
    if (Array.isArray(showTimeDetail) && showTimeDetail.length > 0) {
      return showTimeDetail.map((movie, index) => {
        // const date = new Date();
        // console.log("renderMovie -> date", date);
        // const d = date.getDate();
        // const m = date.getMonth();

        // const y = date.getFullYear();
        // console.log(` ${d} - ${m} - ${y}`);
        // console.log("renderMovie -> movie", movie.lstLichChieuTheoPhim);
        // movie.lstLichChieuTheoPhim.map((item) => {
        //   console.log(item.ngayChieuGioChieu);
        // });

        return (
          <Box key={index} className={classes.itemMovie}>
            <Paper className={classes.imgMovie}>
              <img src={movie.hinhAnh} alt="believe" />
            </Paper>
            <Box className={classes.contentMovie}>
              <Box>
                <Box className={classes.tag} component="span">
                  Love Story
                </Box>
                <Box className={classes.tag} component="span">
                  Drama
                </Box>
              </Box>
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
                <Box className={classes.timeDetail}>8:20:00 PM</Box>
              </Box>
            </Box>
          </Box>
        );
      });
    } else {
      return (
        <Box className={classes.itemMovie}>Gọi API để vừa vào lấy đầu tiên</Box>
      );
    }
  };

  const handleClickLogo = (maHeThongRap) => {
    props.handleGetCinemaBrach(maHeThongRap);
  };

  const handleClickCinema = (maCumRap) => {
    props.handleGetShowTimeDetail(maCumRap);
  };

  return (
    <Box id="infoCinema" className={classes.infoCinema}>
      <Paper elevation={1} className={classes.container}>
        <Box className={classes.cinemaWrapper}>
          <Box display="flex">
            <Box className={classes.listLogo}>{renderCinemaLogo()}</Box>
            <Box className={classes.listCinema}>{renderCinemaBrach()}</Box>
          </Box>
          <Box className={classes.listMovie}>{renderMovie()}</Box>
        </Box>
      </Paper>
    </Box>
  );
}
